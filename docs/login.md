---
id: login
title: Login
sidebar_label: Login
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Login

<div class="login-container">
  <h2>Login</h2>
  <form id="login-form">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

<label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

<button type="button" onclick="submitForm()">Login</button>
  </form>
  <p id="error-message"></p>
</div>

<script>
  function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Simples verificação de credenciais (substitua por lógica real)
    if (username === "admin" && password === "admin") {
      window.location.replace("https://a79300.github.io/Site_Oficina/")
      alert("Login bem-sucedido!");
    } else {
      errorMessage.textContent = "Credenciais inválidas.";
    }
  }
</script>
<style>
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }

  .login-container {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }

  #error-message {
    color: red;
    margin-top: 10px;
  }
</style>