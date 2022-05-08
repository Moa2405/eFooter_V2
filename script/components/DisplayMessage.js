export default function DisplayMessage(messageType, message, targetElement) {
    const element = document.querySelector(targetElement);

    element.innerHTML = `<div class="alert alert-${messageType}" role="alert">${message}</div>`;
}
