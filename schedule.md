# Schedule an Audit

---

<style>
.input-container {
    position: relative;
    width: 100%;
    height: 55px;
    margin-bottom: 20px;
}
.input-container input:valid + .input-label,
.input-container:focus-within .input-label {
    top: 10%;
    font-size: 12px;
}
.styled-input {
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

**We just need a few details:**

<form action="https://formsubmit.co/7dda0715e6ff9af6994fe982d887c530" method="POST">
    <div style="padding-top: 15px;"></div>
    <div style="padding-top: 15px;"></div>
    <div style="display: flex;">
        <div style="flex: 60%; padding-left: 0px;">
            <div class="input-container">
                <input type="text" id="name" name="name" class="styled-input" required>
                <label for="name" class="input-label">Name</label>
            </div>
        </div>
        <div style="flex: 50%; padding-left: 15px;">
            <div class="input-container">
                <input type="text" id="company" name="company" class="styled-input" required>
                <label for="company" class="input-label">Company</label>
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
        <input type="text" id="availability" name="availability" class="styled-input" required>
        <label for="availability" class="input-label">Availability</label>
    </div>
    <div id="button-container" style="padding-top: 40px; padding-bottom: 300px;">
        <button type="submit" class="submit-button" id="submit-button">Submit</button>
    </div>
</form>