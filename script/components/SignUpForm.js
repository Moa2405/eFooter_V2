const SignUpForm = () => {
    return (`
        <form novalidate id="login-form" class="container" style="max-width: 350px;">
            <div class="message-container"></div>
            <div class="mb-3">
                <label for="email" class="form-label">Email*</label>
                <input type="email" class="form-control" id="email" formnovalidate="formnovalidate">
            </div>
            <div class="mb-3">
                <label for="user-name" class="form-label">Username*</label>
                <input type="text" class="form-control" id="user-name">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password*</label>
                <input type="password" class="form-control" id="password">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="checkbox-password">
                    <label class="form-check-label" for="checkbox-password">
                    Show password
                    </label>
                </div>
            </div>
            <button id="login-bnt" class="btn btn-primary">Sign up</button>
        </form>`
    );
};

export default SignUpForm;