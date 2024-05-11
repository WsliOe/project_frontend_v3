import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";
//import { useNavigate } from "react-router-dom";
//import { useForm } from "react-hook-form";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="E-Mail">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Passwort">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Einloggen" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm; /* handleSubmit;*/ /*, formState */ /* } = useForm();*/

/*GitHub-Code
function LoginForm() {
  /*
  const { /*register,*/

/*const { login, isLoading } = useLogin();*/
//const navigate = useNavigate();

/*
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(data) {
    const { email, password } = data;
    try {
      await login({ email, password });
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="E-Mail">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Passwort">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Einloggen" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
*/
