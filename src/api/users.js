module.exports = (req, res) => {
  const users = [
    {
      name: 'Josie Waters',
      email: 'alex@fisherking.co',
      title: 'Investor Integration Supervisor',
      address: '22745 O`Kon Parks, Ernsermouth',
      pic: '/img/01.png'
    },
    {
      name: 'John Harris',
      email: 'adriel@larson.io',
      title: 'International Functionality waste',
      address: '3334 Maye Extension, New York',
      pic: '/img/02.png'
    },
    {
      name: 'Alex Miles',
      email: 'alex@walmart.com',
      title: 'National Marketing Representative',
      address: '19851 Candelario Union, Badwaters',
      pic: '/img/03.png'
    },
    {
      name: 'Sandra Janes',
      email: 'sandra@haley.io',
      title: 'National Marketing Representative',
      address: '19851 Candelario Union, San Francisco',
      pic: '/img/04.png'
    }
  ]

  res.end(JSON.stringify(users))
}
