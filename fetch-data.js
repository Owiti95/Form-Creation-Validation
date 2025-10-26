// Define async function to fetch and display user data
async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users'
  const dataContainer = document.getElementById('api-data')

  try {
    // Fetch data from API
    const response = await fetch(apiUrl)
    const users = await response.json()

    // Clear loading text
    dataContainer.innerHTML = ''

    // Create a list element
    const userList = document.createElement('ul')

    // Loop through users and create list items
    users.forEach((user) => {
      const listItem = document.createElement('li')
      listItem.textContent = user.name
      userList.appendChild(listItem)
    })

    // Append list to container
    dataContainer.appendChild(userList)
  } catch (error) {
    console.error('Error fetching data:', error)
    dataContainer.innerHTML = 'Failed to load user data.'
  }
}

// Run after the DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData)
