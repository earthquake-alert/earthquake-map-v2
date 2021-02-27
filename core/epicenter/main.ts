function main() {
  const data = document.getElementById('data')?.textContent

  if (data) {
    const jsonData = JSON.parse(data)

    console.log(jsonData)
  }

}

main()
