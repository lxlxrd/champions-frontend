<template>
    <section class="contact-section">
        <h2>Contact us</h2>
        <form class="contact-form" @submit.prevent="handleSubmit">
            <input type="text" placeholder="First name" name="firstname" required />
            <input type="text" placeholder="Last name" name="lastname" required />

            <select name="email" required>
                <option disabled selected>Email Address</option>
                <option>example@example.com</option>
                <option>another@example.com</option>
            </select>
            <select name="phone" required>
                <option disabled selected>Phone Number</option>
                <option>+1 123 456 7890</option>
                <option>+44 1234 567890</option>
            </select>

            <input type="text" placeholder="Subject" name="subject" required class="full" />
            <textarea placeholder="Message" name="message" rows="6" required class="full"></textarea>

            <div class="button-wrapper full">
                <button type="submit">Submit</button>
            </div>
        </form>
    </section>
</template>

<script setup>
function handleSubmit() {
    alert('Form submitted!')
}
</script>

<style scoped>
.contact-section {
    max-width: 900px;
    margin: 60px auto;
    text-align: center;
    font-family: Arial, sans-serif;
}

.contact-section h2 {
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 30px;
    color: #1c2237;
}

.contact-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    width: 100%;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
    padding: 12px 15px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
    resize: none;
}

select {
    appearance: none;
    background: url('data:image/svg+xml;utf8,<svg fill="gray" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>') no-repeat right 15px center;
    background-size: 15px;
    cursor: pointer;
}

.full {
    grid-column: 1 / 3;
    /* Prend toute la largeur */
}

.button-wrapper {
    display: flex;
    justify-content: center;
}

button {
    background-color: #d2910a;
    color: white;
    font-weight: 600;
    padding: 12px 48px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #b27707;
}
</style>
