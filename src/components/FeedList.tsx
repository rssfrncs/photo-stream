import * as React from "react";
import { FixedSizeList } from "react-window";

const rowStaticStyle = {
  display: "grid"
};

type Props<T> = {
  items: T[];
  onEndReached: () => void;
  onStartReached: () => void;
  columns?: number;
  height: number;
  width: number;
  renderItem: (item: T) => React.ReactChild;
  endOffset?: number;
  itemHeight?: number;
  gap?: number;
};
export function FeedList<T>({
  items,
  onEndReached,
  columns = 3,
  height,
  width,
  renderItem,
  onStartReached,
  endOffset = 0,
  itemHeight,
  gap = 5
}: Props<T>) {
  const rows = Math.ceil(items.length / columns);
  const rowHeight = itemHeight || height;
  const scrollHeightTotal = rows * rowHeight - (height - (itemHeight || 0));
  return (
    <FixedSizeList
      style={{
        overflowX: "hidden",
        width,
        height
      }}
      width={width}
      height={height}
      onScroll={({ scrollOffset, scrollDirection }) => {
        if (scrollOffset === 0 && scrollDirection === "backward")
          onStartReached();
        else if (
          scrollOffset >= scrollHeightTotal - rowHeight - endOffset &&
          scrollDirection === "forward"
        )
          onEndReached();
      }}
      itemCount={rows}
      itemSize={rowHeight}
    >
      {({ style, index }) => {
        const renders: React.ReactChild[] = [];
        for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
          const datum = items[index * columns + columnIndex];
          if (datum) renders.push(renderItem(datum));
        }
        return (
          <div
            key={index}
            style={{
              ...style,
              ...rowStaticStyle,
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gridGap: gap,
              paddingBottom: gap
            }}
          >
            {renders}
          </div>
        );
      }}
    </FixedSizeList>
  );
}
