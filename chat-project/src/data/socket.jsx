export const socket = new WebSocket(
  `http://localhost:8080/ws?token=${document.cookie.split("=")[1]}/user/queue/home`,
);
