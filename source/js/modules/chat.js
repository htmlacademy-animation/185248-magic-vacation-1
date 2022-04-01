export default () => {
  const messageForm = document.getElementById(`message-form`);
  const messageField = document.getElementById(`message-field`);
  const messageList = document.getElementById(`messages`);
  const chatBlock = document.querySelector(`.js-chat`);

  messageForm.addEventListener(`submit`, function (e) {
    e.preventDefault();

    const scrollToBottom = function () {
      if (messageList.scrollHeight > chatBlock.offsetHeight) {
        chatBlock.scrollTop = messageList.scrollHeight;
      }
    };

    const getAnswer = function () {
      setTimeout(function () {
        const answerEl = document.createElement(`li`);
        const placeholder = document.createElement(`div`);
        const textEl = document.createElement(`p`);
        placeholder.classList.add(`chat__placeholder`);
        for (let i = 0; i < 3; i++) {
          const dot = document.createElement(`span`);
          placeholder.appendChild(dot);
        }
        answerEl.appendChild(placeholder);
        answerEl.classList.add(`chat__message`);
        answerEl.classList.add(`chat__message--incoming`);
        answerEl.classList.add(`chat__message--last`);
        const answer = Math.floor(Math.random() * 2);
        let answerText;

        if (answer) {
          answerText = `Да`;
        } else {
          answerText = `Нет`;
        }

        textEl.innerText = answerText;
        textEl.classList.add(`hidden`);
        answerEl.appendChild(textEl);
        messageList.appendChild(answerEl);
        scrollToBottom();

        setTimeout(function () {
          const lastMessage = document.querySelector(`.chat__message--last`);
          if (lastMessage) {
            let lastMessagePlaceholder = lastMessage.querySelector(`.chat__placeholder`);
            let lastMessageText = lastMessage.querySelector(`p`);
            lastMessagePlaceholder.classList.add(`chat__placeholder--hidden`);
            setTimeout(function () {
              lastMessagePlaceholder.remove();
            }, 400);
            lastMessageText.classList.remove(`hidden`);
            lastMessage.classList.remove(`chat__message--last`);
          }
        }, 700);
      }, 700);
    };

    const postQuestion = function () {
      if (messageField.value) {
        const messageEl = document.createElement(`li`);
        messageEl.classList.add(`chat__message`);
        const messageText = messageField.value;
        const text = document.createElement(`p`);
        text.innerText = messageText;
        messageEl.appendChild(text);
        messageEl.classList.add(`chat__message--outcoming`);
        messageList.appendChild(messageEl);
        messageField.value = ``;
        messageField.setAttribute(`disabled`, `true`);
        scrollToBottom();

        getAnswer();

        messageField.removeAttribute(`disabled`);
        messageField.focus();
      }
    };

    postQuestion();

  });
};
