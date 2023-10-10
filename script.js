function checkFileSize() {
  const FS = document.getElementById('FS')
  const files = FS.files

  // If there is (at least) one file selected
  if (files.length > 0) {
    if (files[0].size > 75 * 1024) {
      // Check the constraint
      FS.setCustomValidity('The selected file must not be larger than 75 kB')
      return
    }
  }
  // No custom constraint violation
  FS.setCustomValidity('')
}

window.onload = () => {
  document.getElementById('FS').onchange = checkFileSize
}
