var options = {
  thumbnailData: [{
    title: 'See Tutorials',
    number: 12,
    header: 'Learn React',
    description: 'React is a fantastic library for making fast, dynamicpages. React is a fantastic library for making fast, dynamicpages. React is a fantastic library for making fast, dynamicpages.',
    imageUrl: 'https://worldvectorlogo.com/logos/react.svg'
  },
  {
    title: 'See Tutorials',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
    imageUrl: 'https://pbs.twimg.com/profile_images/417078109075034112/iruTC031_400x400.png'
  }]
};

// ask react to render thius class
var element = React.createElement(ThumbnailList, options);
// when we ask react to render this class, we will tell it where to place the rendered element in the dom
ReactDOM.render(element, document.querySelector('.target'));
