function main() {
  const data = document.getElementById('epiData')?.textContent

  if (data) {
    const jsonData = JSON.parse(data)

    console.log(jsonData)
  }

}

main()
