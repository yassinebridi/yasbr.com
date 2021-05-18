export type TestimonialItem = {
  text: string;
  person: {
    name: string;
    avatar: string;
    role: string;
  };
};
export const testimonialsItems: TestimonialItem[] = [
  {
    text:
      'Maecenas faucibus neque tellus, egestas tincidunt arcu iaculis id, Designing user interfaces with a strong focus on.',
    person: {
      name: 'Oussama Mlahfi',
      avatar: 'https://bit.ly/tioluwani-kolawole',
      role: 'Client',
    },
  },
  {
    text:
      'Maecenas faucibus neque tellus, egestas tincidunt arcu iaculis id, Designing user interfaces with a strong focus on.',
    person: {
      name: 'Omar Ibnoussina',
      avatar: 'https://bit.ly/kent-c-dodds',
      role: 'Client',
    },
  },
];
