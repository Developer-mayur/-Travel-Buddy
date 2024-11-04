 // Function to create the signup/signin form
function createAuthForm() {
    // Create main container
    const container = document.createElement('div');
    container.classList.add('container');
    container.id = 'container';

    // Create signup container
    const signUpContainer = document.createElement('div');
    signUpContainer.classList.add('form-container', 'sign-up-container');

    const signUpForm = document.createElement('form');
    signUpForm.action = "#";

    const signUpHeader = document.createElement('h1');
    signUpHeader.textContent = "Create Account";

    const socialContainer = document.createElement('div');
    socialContainer.classList.add('social-container');
    ['facebook-f', 'google-plus-g', 'linkedin-in'].forEach(icon => {
        const socialLink = document.createElement('a');
        socialLink.href = "#";
        socialLink.classList.add('social');
        const iconElement = document.createElement('i');
        iconElement.classList.add('fab', `fa-${icon}`);
        socialLink.appendChild(iconElement);
        socialContainer.appendChild(socialLink);
    });

    const spanText = document.createElement('span');
    spanText.textContent = "or use your email for registration";

    const nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.placeholder = "Name";

    const emailInput = document.createElement('input');
    emailInput.type = "email";
    emailInput.placeholder = "Email";

    const passwordInput = document.createElement('input');
    passwordInput.type = "password";
    passwordInput.placeholder = "Password";

    const signUpButton = document.createElement('button');
    signUpButton.textContent = "Sign Up";
    signUpButton.type = "button"; // Prevent form submission

    signUpForm.appendChild(signUpHeader);
    signUpForm.appendChild(socialContainer);
    signUpForm.appendChild(spanText);
    signUpForm.appendChild(nameInput);
    signUpForm.appendChild(emailInput);
    signUpForm.appendChild(passwordInput);
    signUpForm.appendChild(signUpButton);

    signUpContainer.appendChild(signUpForm);

    // Create sign-in container
    const signInContainer = document.createElement('div');
    signInContainer.classList.add('form-container', 'sign-in-container');

    const signInForm = document.createElement('form');
    signInForm.action = "#";

    const signInHeader = document.createElement('h1');
    signInHeader.textContent = "Sign in";

    const signInSocialContainer = document.createElement('div');
    signInSocialContainer.classList.add('social-container');
    ['facebook-f', 'google-plus-g', 'linkedin-in'].forEach(icon => {
        const socialLink = document.createElement('a');
        socialLink.href = "#";
        socialLink.classList.add('social');
        const iconElement = document.createElement('i');
        iconElement.classList.add('fab', `fa-${icon}`);
        socialLink.appendChild(iconElement);
        signInSocialContainer.appendChild(socialLink);
    });

    const signInSpanText = document.createElement('span');
    signInSpanText.textContent = "or use your account";

    const signInEmailInput = document.createElement('input');
    signInEmailInput.type = "email";
    signInEmailInput.placeholder = "Email";

    const signInPasswordInput = document.createElement('input');
    signInPasswordInput.type = "password";
    signInPasswordInput.placeholder = "Password";

    const forgotPasswordLink = document.createElement('a');
    forgotPasswordLink.href = "#";
    forgotPasswordLink.textContent = "Forgot your password?";

    const signInButton = document.createElement('button');
    signInButton.textContent = "Sign In";
    signInButton.type = "button"; // Prevent form submission

    signInForm.appendChild(signInHeader);
    signInForm.appendChild(signInSocialContainer);
    signInForm.appendChild(signInSpanText);
    signInForm.appendChild(signInEmailInput);
    signInForm.appendChild(signInPasswordInput);
    signInForm.appendChild(forgotPasswordLink);
    signInForm.appendChild(signInButton);

    signInContainer.appendChild(signInForm);

    // Create overlay container
    const overlayContainer = document.createElement('div');
    overlayContainer.classList.add('overlay-container');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const overlayLeft = document.createElement('div');
    overlayLeft.classList.add('overlay-panel', 'overlay-left');

    const overlayLeftHeader = document.createElement('h1');
    overlayLeftHeader.textContent = "Welcome Back!";
    const overlayLeftText = document.createElement('p');
    overlayLeftText.textContent = "To keep connected with us please login with your personal info";
    const signInOverlayButton = document.createElement('button');
    signInOverlayButton.classList.add('ghost');
    signInOverlayButton.id = "signIn";
    signInOverlayButton.textContent = "Sign In";
    signInOverlayButton.type = "button";

    overlayLeft.appendChild(overlayLeftHeader);
    overlayLeft.appendChild(overlayLeftText);
    overlayLeft.appendChild(signInOverlayButton);

    const overlayRight = document.createElement('div');
    overlayRight.classList.add('overlay-panel', 'overlay-right');

    const overlayRightHeader = document.createElement('h1');
    overlayRightHeader.textContent = "Hello, Friend!";
    const overlayRightText = document.createElement('p');
    overlayRightText.textContent = "Enter your personal details and start your journey with us";
    const signUpOverlayButton = document.createElement('button');
    signUpOverlayButton.classList.add('ghost');
    signUpOverlayButton.id = "signUp";
    signUpOverlayButton.textContent = "Sign Up";
    signUpOverlayButton.type = "button";

    overlayRight.appendChild(overlayRightHeader);
    overlayRight.appendChild(overlayRightText);
    overlayRight.appendChild(signUpOverlayButton);

    overlay.appendChild(overlayLeft);
    overlay.appendChild(overlayRight);
    overlayContainer.appendChild(overlay);

    // Append all to the main container
    container.appendChild(signUpContainer);
    container.appendChild(signInContainer);
    container.appendChild(overlayContainer);
    document.body.appendChild(container);

    // Add event listeners for the buttons
    signUpOverlayButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    signInOverlayButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });
}

// Call the function to create the form

