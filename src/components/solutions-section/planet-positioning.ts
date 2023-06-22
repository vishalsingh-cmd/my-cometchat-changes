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
        left: containerWidth / 2 - elementCenter - 200
      },
      {
        top: 50,
        left: containerWidth / 2 - elementCenter + 200
      }
    ],

    // 3 elements
    [
      {
        top: 0,
        left: containerWidth / 3 - elementCenter - 200
      },
      {
        top: 100,
        left: containerWidth / 2 - elementCenter
      },
      {
        top: 50,
        left: containerWidth - elementCenter - 200
      }
    ],

    // 4 elements
    [
      {
        top: 0,
        left: containerWidth / 2 - elementCenter - 400
      },
      {
        top: 50,
        left: containerWidth / 2 - elementCenter - 200
      },
      {
        top: 0,
        left: containerWidth / 2 + elementCenter + 200
      },
      {
        top: 10,
        left: containerWidth / 2 + elementCenter + 400
      }
    ],

    // 5 elements
    [
      {
        top: 100,
        left: containerWidth / 2 - elementCenter - 500
      },
      {
        top: 50,
        left: containerWidth / 2 - elementCenter - 300
      },
      {
        top: 0,
        left: containerWidth / 2 - elementCenter
      },
      {
        top: 10,
        left: containerWidth / 2 + elementCenter + 300
      },
      {
        top: 0,
        left: containerWidth / 2 + elementCenter + 500
      }
    ],

    // 6 elements
    [
      {
        top: 100,
        left: containerWidth / 2 - elementCenter - 600
      },
      {
        top: 50,
        left: containerWidth / 2 - elementCenter - 400
      },
      {
        top: 0,
        left: containerWidth / 2 - elementCenter - 200
      },
      {
        top: 10,
        left: containerWidth / 2 + elementCenter + 200
      },
      {
        top: 0,
        left: containerWidth / 2 + elementCenter
      },
      {
        top: 100,
        left: containerWidth / 2 + elementCenter + 600
      }
    ],

    // 7 elements
    [
      {
        top: 100,
        left: containerWidth / 2 - elementCenter - 400
      },
      {
        top: 50,
        left: containerWidth / 2 - elementCenter - 200
      },
      {
        top: 0,
        left: containerWidth / 2 - elementCenter - 100
      },
      {
        top: 10,
        left: containerWidth / 2 - elementCenter
      },
      {
        top: 0,
        left: containerWidth / 2 + elementCenter + 100
      },
      {
        top: 100,
        left: containerWidth / 2 + elementCenter + 200
      },
      {
        top: 40,
        left: containerWidth / 2 + elementCenter + 400
      }
    ],

    // 8 elements
    [
      {
        top: 100,
        left: containerWidth / 2 - elementCenter - 500
      },
      {
        top: 50,
        left: containerWidth / 2 - elementCenter - 400
      },
      {
        top: 0,
        left: containerWidth / 2 - elementCenter - 200
      },
      {
        top: 10,
        left: containerWidth / 2 - elementCenter - 100
      },
      {
        top: 0,
        left: containerWidth / 2 + elementCenter + 100
      },
      {
        top: 100,
        left: containerWidth / 2 + elementCenter + 200
      },
      {
        top: 40,
        left: containerWidth / 2 + elementCenter + 400
      },
      {
        top: 130,
        left: containerWidth / 2 + elementCenter + 500
      }
    ],
    // 9 elements
    [
      {
        top: 100,
        left: containerWidth / 2 - elementCenter - 550
      },
      {
        top: 50,
        left: containerWidth / 2 - elementCenter - 400
      },
      {
        top: 0,
        left: containerWidth / 2 - elementCenter - 200
      },
      {
        top: 10,
        left: containerWidth / 2 - elementCenter - 100
      },
      {
        top: 0,
        left: containerWidth / 2 + elementCenter
      },
      {
        top: 100,
        left: containerWidth / 2 + elementCenter + 100
      },
      {
        top: 40,
        left: containerWidth / 2 + elementCenter + 200
      },
      {
        top: 130,
        left: containerWidth / 2 + elementCenter + 400
      },
      {
        top: 0,
        left: containerWidth / 2 + elementCenter + 450
      }
    ]
  ];

  const positions = arrayOfPositions[numberOfElements - 1];

  return positions[indexOfElement];
};
