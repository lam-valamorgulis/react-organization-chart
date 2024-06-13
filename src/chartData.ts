export const CHART_DATA = {
  name: "Alice Johnson",
  attributes: {
    title: "Chief Executive Officer",
    department: "Executive",
    location: "Headquarters",
  },
  children: [
    {
      name: "Bob Smith",
      attributes: {
        title: "Production Manager",
        department: "Production",
        location: "Production Facility",
      },
      children: [
        {
          name: "Charlie Davis",
          attributes: {
            title: "Fabrication Foreman",
            department: "Fabrication",
            location: "Fabrication Unit",
          },
          children: [
            {
              name: "Emily Clark",
              attributes: {
                title: "Fabrication Worker",
                location: "Fabrication Unit",
              },
            },
            {
              name: "Frank Harris",
              attributes: {
                title: "Fabrication Worker",
                location: "Fabrication Unit",
              },
            },
          ],
        },
        {
          name: "Grace Lee",
          attributes: {
            title: "Assembly Foreman",
            department: "Assembly",
            location: "Assembly Unit",
          },
          children: [
            {
              name: "Helen Martin",
              attributes: {
                title: "Assembly Worker",
                location: "Assembly Unit",
              },
            },
            {
              name: "Ian Scott",
              attributes: {
                title: "Assembly Worker",
                location: "Assembly Unit",
              },
            },
          ],
        },
      ],
    },
    {
      name: "David Thompson",
      attributes: {
        title: "Marketing Manager",
        department: "Marketing",
        location: "Headquarters",
      },
      children: [
        {
          name: "Jennifer Wilson",
          attributes: {
            title: "Sales Officer A",
            department: "Sales A",
            location: "Regional Office A",
          },
          children: [
            {
              name: "Kevin Young",
              attributes: {
                title: "Salesperson A1",
                location: "Regional Office A",
              },
            },
            {
              name: "Laura King",
              attributes: {
                title: "Salesperson A2",
                location: "Regional Office A",
              },
            },
          ],
        },
        {
          name: "Michael Brown",
          attributes: {
            title: "Sales Officer B",
            department: "Sales B",
            location: "Regional Office B",
          },
          children: [
            {
              name: "Nancy Davis",
              attributes: {
                title: "Salesperson B1",
                location: "Regional Office B",
              },
            },
            {
              name: "Oscar White",
              attributes: {
                title: "Salesperson B2",
                location: "Regional Office B",
              },
            },
          ],
        },
      ],
    },
  ],
};
