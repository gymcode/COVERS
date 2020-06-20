export const FAQData = [
    {
      id: 1,
      title: 'What is Coronavirus?',
      content:
        'Coronavirus is a large group of viruses that are common among animals. In rare cases, they are what scientists call zoonotic, meaning they can be transmitted from animals to humans, according to the US Centers for Disease Control and Prevention. It is a dangerous diseases with incubation period between 4-6 days.',
    },
    {
      id: 2,
      title: 'What are the symptoms of COVID-19?',
      content:
        'The viruses can make people sick. Coronavirus symptoms include;fever,a runny nose,cough,sore throat and possibly a headache',
    },
    {
        id: 3,
      title: 'How does COVID-19 spread?',
      content:
        'When it comes to human-to-human transmission of the viruses, often it happens when someone comes into contact with the infected persons secretions. The exposure factors are; a cough, sneeze or handshake',
    },
    {
        id: 4,
      title:
        'What can I do to protect myself & prevent the spread of the disease?',
      content:
        'Wash your hands with soap and water before touching anything including your eyes, nose and mouth. Cover your mouth and nose when you cough or sneeze. Disinfect the objects and surfaces you touch. If you are sick, stay home and avoid crowds and contact with others.',
    },
    {
        id: 5,
      title: 'How likely am I to catch COVID-19?',
      content:
        'The virus can also be transmitted by touching something an infected person has touched and then touching your mouth, nose or eyes.',
    },
    {
        id: 6,
      title: 'What should you do if you think you have COVID-19',
      content:
        'Call your doctor for advice if you think you’ve been exposed to coronavirus and develop a fever or cough. If you don’t have a primary care physician, call your local board of public health or local hospital. Due to the limited availability of test kits, your doctor will only test you if necessary. If he decides not to test you, he will likely advise you to self-isolate at home until your symptoms are gone.',
    },
    {
        id: 7,
      title: 'Who is at risk for developing severe illness?',
      content:
        'While we are still learning about how COVID-19 affects people, older persons and person with pre-existing medical conditions (such as high blood pressure, heart disease,lung disease, cancer and diabetes) appear to develop serious illness more than others',
    },
    {
        id: 8,
      title: 'Are antibiotics effective for preventing or treating the COVID-19?',
      content:
        'No. Antibiotics do not work against viruses, they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work. Antibiotics should not be used as a means of prevention or treatment of COVID-19. They should only be used as directed by a physician to treat the bacterial infection',
    },
    {
        id: 9,
      title:
        'Are there any medical or therapy that can prevent or cure COVID-19?',
      content:
        'While some western, traditional or home remedies may provide comfort to alleviate symptoms of COVID-19, there is no evidence that current medicine can prevent or cure the disease. WHO does not recommend self-medication with any medicines, including antibiotics, as prevention or cure for COVID-19. However, there are several ongoing clinical trials that include both western and tradtional medicines. WHO will continue to provide updated information as soon as clinical findings are available.',
    },
    {
        id: 10,
      title: 'Is there a vaccine, drug or treatment for COVID-19?',
      content:
        'There is no specific treatment. Most of the time, symptoms will go away on their own. Doctors can relieve symptoms by prescribing a pain or fever medication.',
    },
  ];

  export const Symptoms = [
    {
      id: 1,
      name: 'Fever',
      selected: [
        { id: 1, sign: 'None', value: 0 , selectStatus:false},
        { id: 2, sign: 'Mild', value: 1, selectStatus:false },
        { id: 3, sign: 'Mid', value: 2,selectStatus:false  },
        { id: 4, sign: 'Semi', value: 3,selectStatus:false  },
        { id: 5, sign: 'High', value: 4,selectStatus:false  },
      ],
    },
    {
      id: 2,
      name: 'Aches and Pains ',
      selected: [
        { id: 1, sign: 'None', value: 0,selectStatus:false  },
        { id: 2, sign: 'Mild', value: 1,selectStatus:false  },
        { id: 3, sign: 'Mid', value: 2,selectStatus:false  },
        { id: 4, sign: 'Semi', value: 3,selectStatus:false  },
        { id: 5, sign: 'High', value: 4,selectStatus:false  },
      ],
    },
    {
      id: 3,
      name: 'Shortness of breath ',
      selected: [
        { id: 1, sign: 'None', value: 0,selectStatus:false  },
        { id: 2, sign: 'Mild', value: 1,selectStatus:false  },
        { id: 3, sign: 'Mid', value: 2,selectStatus:false  },
        { id: 4, sign: 'Semi', value: 3,selectStatus:false  },
        { id: 5, sign: 'High', value: 4,selectStatus:false  },
      ],
    },
    {
      id: 4,
      name: ' Sore Throat  ',
      selected: [
        { id: 1, sign: 'None', value: 0,selectStatus:false  },
        { id: 2, sign: 'Mild', value: 1,selectStatus:false  },
        { id: 3, sign: 'Mid', value: 2,selectStatus:false  },
        { id: 4, sign: 'Semi', value: 3,selectStatus:false  },
        { id: 5, sign: 'High', value: 4,selectStatus:false  },
      ],
    },
    {
      id: 5,
      name: ' Dry Cough  ',
      selected: [
        { id: 1, sign: 'None', value: 0,selectStatus:false  },
        { id: 2, sign: 'Mild', value: 1,selectStatus:false  },
        { id: 3, sign: 'Mid', value: 2,selectStatus:false  },
        { id: 4, sign: 'Semi', value: 3,selectStatus:false  },
        { id: 5, sign: 'High', value: 4 ,selectStatus:false },
      ],
    },
    {
      id: 6,
      name: 'Headache',
      selected: [
        { id: 1, sign: 'None', value: 0,selectStatus:false  },
        { id: 2, sign: 'Mild', value: 1,selectStatus:false  },
        { id: 3, sign: 'Mid', value: 2,selectStatus:false  },
        { id: 4, sign: 'Semi', value: 3,selectStatus:false  },
        { id: 5, sign: 'High', value: 4,selectStatus:false  },
      ],
    },
  ];