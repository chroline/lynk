import React from "react";

export const Heading: React.FC<{ level: 1 | 2 | 3 | 4 | 5 | 6 }> = ({ level, children }) => {
  switch (level) {
    case 1:
      return (
        <h1>
          {children}
          <style jsx>{`
            h1:first-of-type {
            }

            h1:not(:first-of-type) {
            }
          `}</style>
        </h1>
      );
    case 2:
      return (
        <h2>
          {children}
          <style jsx>{`
            h2:first-of-type {
            }
          `}</style>
        </h2>
      );
  }
};

export default function createHeadingComponent(level: 1 | 2 | 3 | 4 | 5 | 6) {
  return props => <Heading level={level} {...props} />;
}
