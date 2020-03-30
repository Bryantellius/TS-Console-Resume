const myName: string = `Ben Bryant`;
console.log(myName.toUpperCase());
console.log(`Job/Career:`);
console.log(`Software Programming`);
console.log(`About me:`);
console.log(
  `I'm a college graduate studying Full Stack Development with Covalance.io`
);
console.log(`Work Experiences:`);

let work = [
  {
    name: "Trak Shak",
    title: "Sales Associate",
    description:
      "help maintain the shop and assist customers with shoe purchases.",
    cool: true
  },
  {
    name: "Xpress Timing",
    title: "Hy-Tek Operator",
    description:
      "operate Hy-Tek and Lynx computer software at Track and Field events.",
    cool: true
  },
  {
    name: "Birmingham Barons",
    title: "Sales Associate",
    description:
      "helped maintain the ballpark, assisted customers with ticket sales.",
    cool: false
  },
  {
    name: "UAB Athletics",
    title: "Compliance Intern",
    description:
      "updated department newsletters, handbooks, and form templates and handled athlete and team forms for season filing.",
    cool: false
  }
];

work.forEach(xp => {
  console.log(`# ${xp.name} # \n as a ${xp.title} and I ${xp.description}`);
  if (xp.cool) {
    console.log(`@BAM^`);
  }
});
