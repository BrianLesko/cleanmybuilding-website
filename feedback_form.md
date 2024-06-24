<!-- Leave Feedback Form -->

---

<style>
.input-container {
    position: relative;
    width: 100%;
    height: 55px;
    margin-bottom: 100px;
}
.input-container input:valid + .input-label,
.input-container:focus-within .input-label {
    top: 10%;
    font-size: 12px;
}
.styled-input,
.styled-textarea {
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
.styled-textarea {
    height: 150px;
    resize: none;
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

**We would appreciate your feedback:**

<form action="https://formsubmit.co/your-endpoint-here" method="POST">
    <div class="input-container">
        <input type="text" id="name" name="name" class="styled-input" required>
        <label for="name" class="input-label">Name</label>
    </div>
    <div class="input-container">
        <input type="email" id="email" name="email" class="styled-input" required>
        <label for="email" class="input-label">Email</label>
    </div>
    <div class="input-container">
        <textarea id="feedback" name="feedback" class="styled-input styled-textarea" required></textarea>
        <label for="feedback" class="input-label">Feedback</label>
    </div>
    <input type="hidden" name="_next" value="https://yourthankyoupage.co">
    <input type="hidden" name="_subject" value="Feedback Submission">
    <input type="hidden" name="_cc" value="info@yourcompany.com">
    <input type="hidden" name="_autoresponse" value="Thank you for your feedback. We value every input we receive.">
    <div id="button-container">
        <button type="submit" class="submit-button" id="submit-button">Submit Feedback</button>
    </div>
</form>
