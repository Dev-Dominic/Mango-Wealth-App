import React, { useState } from "react";
import styled from "@emotion/styled";
import { TextField, Grid } from "@material-ui/core";
import axios from "axios";

const FormContainer = styled.div`
  display: flex;
  width: 70vh;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;
`;

const LoginWrapper = styled.div`
  background: var(--landing-background);
  display: flex;
  height: 60vh;
  padding: 10rem 10rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background: var(--secondary-blue);
  width: 224px;
  height: 45px;
  text-align: center;

  dislay: flex;
  justify-content: center;
  border: none;
  border-radius: 6px;

  font-size: 16px;
  font-weight: 700;
  color: #ffff;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response) {
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("user_id", response.data.user_id);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <LoginWrapper>
      <Grid item xs={6}>
        <ContentContainer>
          <p className="sub-headings" style={{ marginTop: "2.5rem" }}>
            {" "}
            Jump right back in{" "}
          </p>
          <p className="text-content"> Sign in to continue </p>
        </ContentContainer>
      </Grid>

      <Grid item xs={6}>
        <FormContainer>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            style={{ marginTop: "1rem" }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            style={{ marginTop: "1rem" }}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <a style={{ marginTop: "1.5rem" }}> Forgot password?</a>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "3rem",
            }}
          >
            <p>
              {" "}
              New user?
              <a href="/sign-up"> Create account </a>
            </p>
            <Button onClick={handleLogin}> Sign In </Button>
          </div>
        </FormContainer>
      </Grid>
    </LoginWrapper>
  );
};

export default Login;
