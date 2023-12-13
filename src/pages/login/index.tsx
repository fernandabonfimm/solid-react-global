import React from "react";
import { InputText } from "../../components/inputText";
import { emailRegex, passwordRegex } from "../../utils/regex";
import { InputPassword } from "../../components/inputPassword";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
    const navigate = useNavigate();
    const [errorMessages, setErrorMessages] = React.useState<string>("");
    const [successMessages, setSuccessMessages] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const validateEmail = (value: string) => {
        return emailRegex.test(value);
    };
    const validatePassword = (value: string) => {
        return passwordRegex.test(value);
    }

    const handleLogin = () => {
        if (validateEmail(email) && validatePassword(password)) {
            setSuccessMessages("Campos inseridos corretamente");
            setErrorMessages("");
            Swal.fire({
                icon: 'success',
                title: 'Login realizado com sucesso!',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
            }).then(() => {
                navigate("/dashboard");
            });
        } else {
            setErrorMessages("E-mail ou senha inválidos!");
            setSuccessMessages("");
        }
    };

    return (
        <div className="flex">
            <div className="bg-darkBackground w-full flex items-center justify-center">
                <div className="bg-white shadow-2xl p-12 rounded-md flex flex-col items-center justify-center w-3/4">
                    <h1 className="text-3xl font-bold mb-4 text-black">Entre em sua conta</h1>
                    <p>Olá, Programador! Realize login em sua conta preenchendo os dois campos a seguir.</p>
                    <div className="w-full flex justify-start items-start flex-col gap-2 mt-5 mb-5">
                        <InputText label="E-mail"
                            placeholder="Digite seu e-mail"
                            onChange={(e) => { setEmail(e.target.value) }}
                            value={email}
                            success={successMessages}
                            error={errorMessages}
                        />
                        <InputPassword label="Senha"
                            placeholder="Digite sua senha"
                            onChange={(e) => { setPassword(e.target.value) }}
                            value={password}
                            success={successMessages}
                            error={errorMessages}
                        />
                        <Button label="Entrar" loading={false} onClick={handleLogin} solid={true} />
                    </div>
                </div>
            </div>
        </div>
    );
}