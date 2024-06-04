import React, { lazy, Suspense } from "react";
import {
  Container,
  BackgroundImage,
  AuthenticationLayout,
} from "../ui/Authentication";
import Spinner from "../ui/Spinner";

const Logo = lazy(() => import("../ui/Logo"));
const Heading = lazy(() => import("../ui/Heading"));
const LoginForm = lazy(() => import("../features/authentication/LoginForm"));

const MemoizedLogo = React.memo(Logo);
const MemoizedHeading = React.memo(Heading);
const MemoizedLoginForm = React.memo(LoginForm);

function Login() {
  return (
    <Container>
      <BackgroundImage />
      <AuthenticationLayout>
        <Suspense fallback={<Spinner />}>
          <MemoizedLogo />
          <MemoizedHeading as="h4">Login Mitglieder</MemoizedHeading>
          <MemoizedLoginForm />
        </Suspense>
      </AuthenticationLayout>
    </Container>
  );
}

export default Login;
