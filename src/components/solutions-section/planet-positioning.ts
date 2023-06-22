export const planetPositioning = (
  containerWidth: number,
  numberOfElements: number,
  indexOfElement: number
) => {
  const elementCenter = 130 / 2;

  const arrayOfPositions = [
    // 1 elements
    [
      {
        top: 0,
        left: containerWidth / 2 - elementCenter
      }
    ],

    // 2 elements
    [
      {
        top: 0,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.15
      },
      {
        top: 50,
        left: containerWidth / 2 - elementCenter + containerWidth * 0.14
      }
    ],

    // 3 elements
    [
      {
        top: 0,
        left: containerWidth / 3 - elementCenter - containerWidth * 0.1
      },
      {
        top: 100,
        left: containerWidth / 2 - elementCenter
      },
      {
        top: 50,
        left: containerWidth / 2 - elementCenter + containerWidth * 0.18
      }
    ],

    // 4 elements
    [
      {
        top: 0,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.35
      },
      {
        top: 50,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.1
      },
      {
        top: 0,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.05
      },
      {
        top: 10,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.25
      }
    ],

    // 5 elements
    [
      {
        top: 100,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.35
      },
      {
        top: 50,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.15
      },
      {
        top: 0,
        left: containerWidth / 2 - elementCenter
      },
      {
        top: 10,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.08
      },
      {
        top: 0,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.25
      }
    ],

    // 6 elements
    [
      {
        top: 100,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.45
      },
      {
        top: 50,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.3
      },
      {
        top: 0,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.1
      },
      {
        top: 10,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.001
      },
      {
        top: 0,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.18
      },
      {
        top: 100,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.31
      }
    ],

    // 7 elements
    [
      {
        top: 100,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.4
      },
      {
        top: 50,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.25
      },
      {
        top: 0,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.15
      },
      {
        top: 10,
        left: containerWidth / 2 - elementCenter
      },
      {
        top: 0,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.03
      },
      {
        top: 100,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.15
      },
      {
        top: 40,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.3
      }
    ],

    // 8 elements
    [
      {
        top: 100,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.45
      },
      {
        top: 50,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.3
      },
      {
        top: 0,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.18
      },
      {
        top: 10,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.05
      },
      {
        top: 0,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.001
      },
      {
        top: 100,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.1
      },
      {
        top: 40,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.21
      },
      {
        top: 130,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.31
      }
    ],
    // 9 elements
    [
      {
        top: 100,
        left: 0
      },
      {
        top: 50,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.35
      },
      {
        top: 0,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.25
      },
      {
        top: 10,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.13
      },
      {
        top: 0,
        left: containerWidth / 2 - elementCenter
      },
      {
        top: 100,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.01
      },
      {
        top: 40,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.13
      },
      {
        top: 130,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.25
      },
      {
        top: 0,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.35
      }
    ]
  ];

  const positions = arrayOfPositions[numberOfElements - 1];

  return positions[indexOfElement];
};
