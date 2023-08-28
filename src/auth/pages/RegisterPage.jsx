import React from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Registrarse">
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="nombre completo"
                type="text"
                placeholder="Ingrese su nombre completo"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="correo"
                type="email"
                placeholder="correo@correo.com"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="contraseña"
                type="password"
                placeholder="Ingrese su contraseña"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth sx={{ mb: 3 }}>
                  <Typography>Crear Cuenta</Typography>
                </Button>
              </Grid>
              <Grid container direction="row" justifyContent="end">
                <Link component={RouterLink} color="inherit" to="/auth/login">
                  ¿Ya tienes una cuenta?
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
