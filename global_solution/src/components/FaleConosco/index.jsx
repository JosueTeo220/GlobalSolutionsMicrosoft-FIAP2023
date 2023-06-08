import React from "react";
import { useForm } from "react-hook-form";
import "./FaleConosco.style.css";

const FaleConosco = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Envie as informações ou execute outra ação desejada
    console.log("Informações válidas:", data);
    // Limpe os campos do formulário
    reset();
  };

  return (
    <div className='container-fluid'>
      <h1 className="h1 form-title mb-5 mt-5 text-light"><span>Fale Conosco</span>{" "}para Combate à Fome</h1>
      <form className="fale-conosco-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="nome">Nome Completo:</label>
          <input
            type="text"
            id="nome"
            className={errors.nome ? "error" : ""}
            {...register("nome", { required: true })}
          />
          {errors.nome && (
            <span className="error-message">
              Por favor, insira seu nome completo.
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            className={errors.email ? "error" : ""}
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
          />
          {errors.email && (
            <span className="error-message">
              Por favor, insira um e-mail válido.
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="idade">Idade:</label>
          <input
            type="number"
            id="idade"
            className={errors.idade ? "error" : ""}
            {...register("idade", {
              required: true,
              pattern: /^[0-9]+$/,
            })}
          />
          {errors.idade && (
            <span className="error-message">
              Por favor, insira uma idade válida.
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="number"
            id="telefone"
            className={errors.telefone ? "error" : ""}
            {...register("telefone", {
              required: true,
              pattern: /^\d+$/,
            })}
          />
          {errors.telefone && (
            <span className="error-message">
              Por favor, insira um telefone válido.
            </span>
          )}
        </div>
        <button type="submit" className="w-25 mb-3 border-2">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FaleConosco;
