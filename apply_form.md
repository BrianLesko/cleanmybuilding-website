<style>
.input-container {
    position: relative;
    width: 100%;
    height: 55px;
    margin-bottom: 20px;
}
.input-container input[type="date"] {
    width: 100%;
    height: 100%;
    padding: 20px 20px 10px 20px;
    box-sizing: border-box;
    border: 1px solid darkgrey;
    border-radius: 18px;
    font-size: 16px;
    font-family: Arial, sans-serif;
    color: black;
    font-weight: 100;
}
.input-container input[type="date"]::before {
    content: attr(placeholder);
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    bottom: 0;
    background-color: white;
    color: transparent;
    border-radius: 18px;
}
.input-container input[type="date"]:focus::before {
    content: none; /* Remove the overlay when the input is focused */
}
.input-label {
    position: absolute;
    left: 20px;
    top: 30%;
    transform: translateY(-10%);
    transition: 0.2s ease;
    font-family: Arial, sans-serif;
    font-weight: 100;
}
.input-container:focus-within .input-label {
    top: 10%;
    font-size: 12px;
}
#button-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.submit-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
    border-radius: 25px;
}
.submit-button:hover {
    background-color: #4eb952;
}
</style>


# Apply now
---
**We just need a few details**



<form action="https://formsubmit.co/7dda0715e6ff9af6994fe982d887c530" method="POST">
    <div style="display: flex;">
        <div style="flex: 60%; padding-left: 0px;">
            <div class="input-container">
                <input type="text" id="name" name="name" class="styled-input" required>
                <label for="name" class="input-label">First Name</label>
            </div>
        </div>
        <div style="flex: 50%; padding-left: 15px;">
            <div class="input-container">
                <input type="text" id="company" name="company" class="styled-input" required>
                <label for="company" class="input-label">Last Name</label>
            </div>
        </div>
    </div>
    <div style="display: flex;">
        <div style="flex: 40%; padding-left: 0px;">
            <div class="input-container">
                <input type="tel" id="phone" name="phone" class="styled-input" required>
                <label for="phone" class="input-label">Phone</label>
            </div>
        </div>
        <div style="flex: 50%; padding-left: 15px;">
            <div class="input-container">
                <input type="email" id="email" name="email" class="styled-input" required>
                <label for="email" class="input-label">Email</label>
            </div>
        </div>
    </div>
    <div class="input-container">
        <input type="date" id="birthdate" name="birthdate" class="styled-input" placeholder=" " required>
        <label for="birthdate" class="input-label">Birth Date</label>
    </div>
    <div class="input-container">
        <textarea id="impress_us" name="impress_us" class="styled-input styled-textarea" required></textarea>
        <label for="impress_us" class="input-label">Impress Us</label>
    </div>
    <input type="hidden" name="_next" value="https://cleanmybuilding.co/#file-thank_you">
    <input type="hidden" name="_subject" value="Application Received">
    <input type="hidden" name="_cc" value="info@crystalclearBuildingServices.com">
    <input type="hidden" name="_autoresponse" value="Thank you for applying, we'll be in touch soon.">
    <div style="height: 80px;"></div> <!-- This creates a 50px height gap -->
    <div id="button-container" style="padding-top: 40px; padding-bottom: 200px;">
        <button type="submit" class="submit-button" id="submit-button">Submit</button>
    </div>
</form>