export default {
  name: 'Jane Smith',
  profession: 'Applied & Research Scientist',
  profile: require('./content/profile.jpeg'),
  contact: [
    {
      name: 'cell',
      icon: 'mdi-contact-phone',
      logo: '',
      info: '(732) 154-9806',
      href: '',
    },
    {
      name: 'email',
      icon: 'mdi-email',
      logo: '',
      info: 'JaneSmith@gmail.com', 
      href: '',
    },
    {
      name: 'address',
      icon: 'mdi-map',
      logo: '',
      info: '405 E 42nd St, New York, NY 10017, US',
      href: '',
    },
    {
      name: 'github',
      // icon: '',
      icon: 'mdi-github-box',
      // logo: require('./content/logo-github-dark.png'),
      logo: '',
      info: 'https://github.com/gyang274',
      href: 'https://github.com/gyang274',
    },
    {
      name: 'linkedin',
      // icon: '',
      icon: 'mdi-linkedin',
      // logo: require('./content/logo-linkedin-dark.png'),
      logo: '',
      info: `Jane Smith's Linkedin Profile Page`, 
      href: 'https://www.linkedin.com/',
    },
  ],
  specialities: [
    {
      name: 'Machine Learning',
      skills: [
        {
          name: 'main',
          icon: '',
          logo: '',
          href: '',
          info: 'Linear Regression, Logistic Regression'
        },
        {
          name: 'main',
          icon: '',
          logo: '',
          href: '',
          info: 'SVM, Random Forest, Bagging and Boosting'
        }
      ]
    },
    {
      name: 'Deep Learning',
      skills: [
        {
          name: 'main',
          icon: '',
          logo: '',
          href: '',
          info: 'CNN, RNN, LSTM',
        },
      ]
    },
    {
      name: 'Programming Language',
      skills: [
        {
          name: 'Python',
          icon: 'mdi-language-python',
          // logo: require('./content/language-python.png'),
          logo: '',
          info: 'Python',
          href: '',
          rate: 5,
        },
        {
          name: 'R',
          icon: 'mdi-language-r',
          // logo: require('./content/language-r.png'),
          logo: '',
          info: 'R',
          href: '',
          rate: 5,
        },
        {
          name: 'Javascript',
          icon: 'mdi-language-javascript',
          // logo: require('./content/language-javascript.png'),
          logo: '',
          info: 'Javascript',
          href: '',
          rate: 5,
        },
        {
          name: 'C++',
          icon: 'mdi-language-cpp',
          // logo: require('./content/language-cpp.png'),
          logo: '',
          info: 'C++',
          href: '',
          rate: 2,
        }
      ]
    }
  ],
  headline: [
    {
      name: 'Management and Administration',
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
      dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae. Morbi tristique senectus et netus et 
      malesuada fames ac. Tincidunt dui ut ornare lectus sit amet est. Ornare suspendisse sed nisi lacus sed.`,
    },
    {
      name: 'Communication and Collaboration',
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
      dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae. Morbi tristique senectus et netus et 
      malesuada fames ac. Tincidunt dui ut ornare lectus sit amet est. Ornare suspendisse sed nisi lacus sed.`,
    }
  ],
  education: [
    {
      name: 'Massachusetts Institute of Technology',
      degree: 'Ph.D., Statistics',
      span: 'Sep. 2006 - Jul. 2010',
      logo: require('./content/university-mit.png'),
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: 'Harvard University',
      degree: 'B.S., Neuroscience',
      span: 'Sep. 2002 - Jul. 2006',
      logo: require('./content/university-harvard.png'),
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ],
  experience: [
    {
      name: 'Apple',
      icon: 'mdi-apple',
      span: 'Sep. 2012 - Jul. 2014',
      work: [
        {
          title: 'Distinguished Hardware Engineer',
          area: 'Cupertino, CA',
          span: 'Jan. 2014 - Jul. 2014',
          info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae. Morbi tristique senectus et netus et 
            malesuada fames ac. Tincidunt dui ut ornare lectus sit amet est. Ornare suspendisse sed nisi lacus sed.
            <br><br>
            In ante metus dictum at tempor commodo ullamcorper a. In tellus integer feugiat scelerisque varius morbi. 
            Nunc mattis enim ut tellus elementum sagittis vitae et. Platea dictumst vestibulum rhoncus est pellentesque 
            elit ullamcorper dignissim cras. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. 
            <br><br>
            Sit amet tellus cras adipiscing. Vitae turpis massa sed elementum tempus egestas sed sed risus. Bibendum 
            enim facilisis gravida neque convallis a cras. At erat pellentesque adipiscing commodo. Scelerisque purus 
            semper eget duis at tellus at urna. Enim nec dui nunc mattis enim ut tellus. Libero enim sed faucibus turpis 
            in eu mi bibendum. Phasellus faucibus scelerisque eleifend donec pretium. Cursus risus at ultrices mi tempus
            imperdiet.`,
        },
        {
          title: 'Principle Hardware Engineer',
          area: 'Cupertino, CA',
          span: 'May. 2013 - Dec. 2014',
          info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae. Morbi tristique senectus et netus et 
          malesuada fames ac. Tincidunt dui ut ornare lectus sit amet est. Ornare suspendisse sed nisi lacus sed.
          <br><br>
          In ante metus dictum at tempor commodo ullamcorper a. In tellus integer feugiat scelerisque varius morbi. 
          Nunc mattis enim ut tellus elementum sagittis vitae et. Platea dictumst vestibulum rhoncus est pellentesque 
          elit ullamcorper dignissim cras. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. 
          <br><br>
          Sit amet tellus cras adipiscing. Vitae turpis massa sed elementum tempus egestas sed sed risus. Bibendum 
          enim facilisis gravida neque convallis a cras. At erat pellentesque adipiscing commodo. Scelerisque purus 
          semper eget duis at tellus at urna. Enim nec dui nunc mattis enim ut tellus. Libero enim sed faucibus turpis 
          in eu mi bibendum. Phasellus faucibus scelerisque eleifend donec pretium. Cursus risus at ultrices mi tempus
          imperdiet.`,
        },
        {
          title: 'Staff Hardware Engineer',
          area: 'Cupertino, CA',
          span: 'Sep. 2012 - Apr. 2013',
          info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae. Morbi tristique senectus et netus et 
          malesuada fames ac. Tincidunt dui ut ornare lectus sit amet est. Ornare suspendisse sed nisi lacus sed.
          <br><br>
          In ante metus dictum at tempor commodo ullamcorper a. In tellus integer feugiat scelerisque varius morbi. 
          Nunc mattis enim ut tellus elementum sagittis vitae et. Platea dictumst vestibulum rhoncus est pellentesque 
          elit ullamcorper dignissim cras. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. 
          <br><br>
          Sit amet tellus cras adipiscing. Vitae turpis massa sed elementum tempus egestas sed sed risus. Bibendum 
          enim facilisis gravida neque convallis a cras. At erat pellentesque adipiscing commodo. Scelerisque purus 
          semper eget duis at tellus at urna. Enim nec dui nunc mattis enim ut tellus. Libero enim sed faucibus turpis 
          in eu mi bibendum. Phasellus faucibus scelerisque eleifend donec pretium. Cursus risus at ultrices mi tempus
          imperdiet.`,
        },
      ],
    },
    {
      name: 'Microsoft',
      icon: 'mdi-microsoft',
      span: 'Sep. 2009 - Jul. 2011',
      work: [
        {
          title: 'Senior Software Engineer',
          span: 'Sep. 2010 - Jul. 2011',
          area: 'Bellevue, WA',
          info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae. Morbi tristique senectus et netus et 
            malesuada fames ac. Tincidunt dui ut ornare lectus sit amet est. Ornare suspendisse sed nisi lacus sed.
            <br><br>
            In ante metus dictum at tempor commodo ullamcorper a. In tellus integer feugiat scelerisque varius morbi. 
            Nunc mattis enim ut tellus elementum sagittis vitae et. Platea dictumst vestibulum rhoncus est pellentesque 
            elit ullamcorper dignissim cras. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. 
            <br><br>
            Sit amet tellus cras adipiscing. Vitae turpis massa sed elementum tempus egestas sed sed risus. Bibendum 
            enim facilisis gravida neque convallis a cras. At erat pellentesque adipiscing commodo. Scelerisque purus 
            semper eget duis at tellus at urna. Enim nec dui nunc mattis enim ut tellus. Libero enim sed faucibus turpis 
            in eu mi bibendum. Phasellus faucibus scelerisque eleifend donec pretium. Cursus risus at ultrices mi tempus
            imperdiet.`,
        },
        {
          title: 'Software Engineer',
          span: 'Sep. 2009 - Aug. 2010',
          area: 'Bellevue, WA',
          info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae. Morbi tristique senectus et netus et 
            malesuada fames ac. Tincidunt dui ut ornare lectus sit amet est. Ornare suspendisse sed nisi lacus sed.
            <br><br>
            In ante metus dictum at tempor commodo ullamcorper a. In tellus integer feugiat scelerisque varius morbi. 
            Nunc mattis enim ut tellus elementum sagittis vitae et. Platea dictumst vestibulum rhoncus est pellentesque 
            elit ullamcorper dignissim cras. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. 
            <br><br>
            Sit amet tellus cras adipiscing. Vitae turpis massa sed elementum tempus egestas sed sed risus. Bibendum 
            enim facilisis gravida neque convallis a cras. At erat pellentesque adipiscing commodo. Scelerisque purus 
            semper eget duis at tellus at urna. Enim nec dui nunc mattis enim ut tellus. Libero enim sed faucibus turpis 
            in eu mi bibendum. Phasellus faucibus scelerisque eleifend donec pretium. Cursus risus at ultrices mi tempus
            imperdiet.`,
        },
      ],
    },
  ],
  certificates: [
    {
      name: 'Financial Risk Manager (FRM)',
      institute: 'Global Associate of Risk Professionals (GARP)',
      span: 'Issued Mar. 2015 - No Expiration Date',
      logo: require('./content/certificate-frm.png'),
      href: 'http://my.garp.org/DigitalBadgeFRM?id=0034000001aeDQvAAM',
    },
    {
      name: 'Charted Financial Analyst (CFA) Charterholder',
      institute: 'CFA Institute',
      span: 'Issued Mar. 2015 - Expired Oct. 2015',
      logo: require('./content/certificate-cfa.png'),
      href: '',
    },
  ],
  awards: [
    {
      name: 'Best Applied Paper Awards',
      srcs: 'Conference on Computer Vision and Pattern Recognition (CVPR)',
      span: 'Jun. 2018',
      icon: 'mdi-trophy-award',
      color: 'red',
    },
    {
      name: 'Best Research Paper Awards',
      srcs: 'Conference on Neural Information Processing System (NIPS)',
      span: 'Jun. 2017',
      icon: 'mdi-trophy-outline',
      color: 'orange',
    },
    {
      name: 'Best Applied Paper Awards',
      srcs: 'Conference on Computer Vision and Pattern Recognition (CVPR)',
      span: 'Jun. 2016',
      icon: 'mdi-book-multiple',
      color: 'yellow',
    },
    {
      name: 'Best Research Paper Awards',
      srcs: 'Conference on Neural Information Processing System (NIPS)',
      span: 'Jun. 2015',
      icon: 'mdi-library-books',
      color: 'green',
    },
    {
      name: 'Best Applied Paper Awards',
      srcs: 'Conference on Computer Vision and Pattern Recognition (CVPR)',
      span: 'Jun. 2014',
      icon: 'mdi-book-open-page-variant',
      color: 'blue',
    },
    {
      name: 'Best Research Paper Awards',
      srcs: 'Conference on Neural Information Processing System (NIPS)',
      span: 'Jun. 2013',
      icon: 'mdi-buffer',
      color: 'purple',
    },
  ],
  publications: [
    {
      title: 'A Super Fantastic Paper title - Lorem ipsum dolor sit amet.',
      author: '<strong>Jane Smith</strong>, Jared Smith, Janet J. Jenkins',
      journal: 'The Annals of Statistics',
      volume: '42',
      number: '4',
      pages: '314-323',
      year: '2019',
      publisher: 'Great Publisher',
      icon: 'mdi-buffer',
      color: 'red',
    },
    {
      title: 'A Super Fantastic Paper title - Lorem ipsum dolor sit amet.',
      author: '<strong>Jane Smith</strong>, Jared Smith, Janet J. Jenkins',
      journal: 'Journal of the American Statistical Association',
      volume: '42',
      number: '4',
      pages: '314-323',
      year: '2018',
      publisher: 'Great Publisher',
      icon: 'mdi-book-open-page-variant',
      color: 'red',
    },
    {
      title: 'A Super Fantastic Paper title - Lorem ipsum dolor sit amet.',
      author: '<strong>Jane Smith</strong>, Jared Smith, Janet J. Jenkins',
      journal: 'The Annals of Statistics',
      volume: '42',
      number: '4',
      pages: '314-323',
      year: '2017',
      publisher: 'Great Publisher',
      icon: 'mdi-buffer',
      color: 'red',
    },
    {
      title: 'A Super Fantastic Paper title - Lorem ipsum dolor sit amet.',
      author: '<strong>Jane Smith</strong>, Jared Smith, Janet J. Jenkins',
      journal: 'Journal of the American Statistical Association',
      volume: '42',
      number: '4',
      pages: '314-323',
      year: '2016',
      publisher: 'Great Publisher',
      icon: 'mdi-book-open-page-variant',
      color: 'red',
    },
    {
      title: 'A Super Fantastic Paper title - Lorem ipsum dolor sit amet.',
      author: '<strong>Jane Smith</strong>, Jared Smith, Janet J. Jenkins',
      journal: 'The Annals of Statistics',
      volume: '42',
      number: '4',
      pages: '314-323',
      year: '2015',
      publisher: 'Great Publisher',
      icon: 'mdi-buffer',
      color: 'red',
    },
    {
      title: 'A Super Fantastic Paper title - Lorem ipsum dolor sit amet.',
      author: '<strong>Jane Smith</strong>, Jared Smith, Janet J. Jenkins',
      journal: 'Journal of the American Statistical Association',
      volume: '42',
      number: '4',
      pages: '314-323',
      year: '2014',
      publisher: 'Great Publisher',
      icon: 'mdi-book-open-page-variant',
      color: 'red',
    },
    {
      title: 'A Super Fantastic Paper title - Lorem ipsum dolor sit amet.',
      author: '<strong>Jane Smith</strong>, Jared Smith, Janet J. Jenkins',
      journal: 'The Annals of Statistics',
      volume: '42',
      number: '4',
      pages: '314-323',
      year: '2013',
      publisher: 'Great Publisher',
      icon: 'mdi-buffer',
      color: 'red',
    },
    {
      title: 'A Super Fantastic Paper title - Lorem ipsum dolor sit amet.',
      author: '<strong>Jane Smith</strong>, Jared Smith, Janet J. Jenkins',
      journal: 'Journal of the American Statistical Association',
      volume: '42',
      number: '4',
      pages: '314-323',
      year: '2012',
      publisher: 'Great Publisher',
      icon: 'mdi-book-open-page-variant',
      color: 'red',
    },
  ],
}