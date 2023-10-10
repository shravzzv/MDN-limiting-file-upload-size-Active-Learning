# Limiting the size of a file before its upload

Another common constraint is to limit the size of a file to be uploaded. Checking this on the client side before the file is transmitted to the server requires combining the **Constraint Validation API**, and especially the `field.setCustomValidity()` method, with another JavaScript API, here the **File API**.
