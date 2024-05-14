# Schedule an Audit with Us

---

<style>
.input-container {
    position: relative;
    width: 100%;
    height: 55px;
    margin-bottom: 20px; /* Add this line to increase the space between input fields */
}

.input-container.filled .input-label {
    top: 10%;
    font-size: 12px;
}

.input-container input:valid + .input-label,
.input-container:focus-within .input-label {
    top: 10%;
    font-size: 12px;
}

.styled-input {
    width: 100%;
    height: 100%;
    padding: 20px 20px 10px 20px; /* Add top padding and remove bottom padding */
    box-sizing: border-box;
    border: 1px solid darkgrey;
    border-radius: 18px;
    font-size: 16px;
    font-family: Arial, sans-serif !important;
    color: black;
    font-weight: 100;
}

.input-label {
    position: absolute;
    left: 20px;
    top: 30%;
    transform: translateY(-10%);
    transition: 0.2s ease;
    font-family: Arial, sans-serif; /* Set the font for the label */
    font-weight: 100; /* Make the text thinner */
}

.input-container:focus-within .input-label {
    top: 10%; /* Adjust this value to control the label's final position */
    font-size: 12px;
}
</style>

<div style="padding-top: 15px;"></div>

**We just need a few details:**

<div style="padding-top: 15px;"></div>
<div style="display: flex;"><div style="flex: 60%; padding-left: 0px;">

<div class="input-container">
    <input type="text" id="name" name="name" class="styled-input" required>
    <label for="name" class="input-label">Name</label>
</div>

</div><div style="flex: 50%; padding-left: 15px;">

<div class="input-container">
    <input type="text" id="company" name="company" class="styled-input" required>
    <label for="company" class="input-label">Company</label>
</div>

</div></div>
<div style="display: flex;"><div style="flex: 40%; padding-left: 0px;">

<div class="input-container">
    <input type="tel" id="phone" name="phone" class="styled-input" required>
    <label for="phone" class="input-label">Phone</label>
</div>

</div><div style="flex: 50%; padding-left: 15px;">

<div class="input-container">
    <input type="email" id="email" name="email" class="styled-input" required>
    <label for="email" class="input-label">Email</label>
</div>

</div></div>

<div class="input-container">
    <input type="text" id="availability" name="availability" class="styled-input" required>
    <label for="availability" class="input-label">Availability</label>
</div>

<div id="button-container" style="padding-top: 40px; padding-bottom: 300px;">
    <button type="submit" class="submit-button" id="submit-button" onclick="submitForm()">Submit</button>
</div>


<style>
#button-container {
    display: flex; /* Use flexbox */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
}

#submit-button {
    background-color: #4CAF50; /* Green background */
    border: none; /* Remove border */
    color: white; /* White text */
    padding: 15px 32px; /* Add some padding */
    text-align: center; /* Center the text */
    text-decoration: none; /* Remove underline */
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer; /* Change cursor to pointer when hovering over the button */
    transition-duration: 0.4s; /* Add transition effect */
    border-radius: 25px; /* Add rounded corners */
}

#submit-button:hover {
    background-color: #4eb952; /* Lighter green background when hovering over the button */
}
</style>

<script>
function submitForm() {
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const availability = document.getElementById('availability').value;

    const subject = encodeURIComponent('New Audit Request');
    const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Company: ${company}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n` +
        `Availability: ${availability}`
    );

    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
}
</script>