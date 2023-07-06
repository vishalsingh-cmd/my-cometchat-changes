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
        top: -10,
        left: containerWidth / 2 - elementCenter
      }
    ],

    // 2 elements
    [
      {
        top: -10,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.15
      },
      {
        top: 70,
        left: containerWidth / 2 - elementCenter + containerWidth * 0.14
      }
    ],

    // 3 elements
    [
      {
        top: -10,
        left: containerWidth / 3 - elementCenter - containerWidth * 0.1
      },
      {
        top: 70,
        left: containerWidth / 2 - elementCenter
      },
      {
        top: 20,
        left: containerWidth / 2 - elementCenter + containerWidth * 0.18
      }
    ],

    // 4 elements
    [
      {
        top: -10,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.35
      },
      {
        top: 70,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.1
      },
      {
        top: 20,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.05
      },
      {
        top: 90,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.25
      }
    ],

    // 5 elements
    [
      {
        top: -10,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.35
      },
      {
        top: 70,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.15
      },
      {
        top: 20,
        left: containerWidth / 2 - elementCenter
      },
      {
        top: 90,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.08
      },
      {
        top: 50,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.25
      }
    ],

    // 6 elements
    [
      {
        top: -10,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.45
      },
      {
        top: 70,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.3
      },
      {
        top: 20,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.1
      },
      {
        top: 90,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.001
      },
      {
        top: 50,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.18
      },
      {
        top: 60,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.31
      }
    ],

    // 7 elements
    [
      {
        top: -10,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.4
      },
      {
        top: 70,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.25
      },
      {
        top: 20,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.15
      },
      {
        top: 90,
        left: containerWidth / 2 - elementCenter
      },
      {
        top: 50,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.03
      },
      {
        top: 60,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.15
      },
      {
        top: -10,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.3
      }
    ],

    // 8 elements
    [
      {
        top: -10,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.45
      },
      {
        top: 70,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.3
      },
      {
        top: 20,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.18
      },
      {
        top: 90,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.05
      },
      {
        top: 50,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.001
      },
      {
        top: 60,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.1
      },
      {
        top: -10,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.21
      },
      {
        top: 110,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.31
      }
    ],
    // 9 elements
    [
      {
        top: -10,
        left: 0
      },
      {
        top: 70,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.35
      },
      {
        top: 20,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.25
      },
      {
        top: 90,
        left: containerWidth / 2 - elementCenter - containerWidth * 0.13
      },
      {
        top: 50,
        left: containerWidth / 2 - elementCenter
      },
      {
        top: 60,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.01
      },
      {
        top: -10,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.13
      },
      {
        top: 110,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.25
      },
      {
        top: -30,
        left: containerWidth / 2 + elementCenter + containerWidth * 0.35
      }
    ]
  ];

  const positions = arrayOfPositions[numberOfElements - 1];

  return positions[indexOfElement];
};
