import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles.css';


import Login from "./components/login";
import Dashboard from "./pages/dashboard";
import Agendamento from "./pages/agendamento";
import Caixa from "./pages/caixa";
import Clientes from "./pages/clientes";
import Cadastros from "./pages/cadastros";
import Produtos from "./pages/produtos";
import Servicos from "./pages/servicos";
import Financeiro from "./pages/financeiro";
import Compras from "./pages/compras";
//import Parametros from "./pages/parametros";
import Ajuda from "./pages/ajuda";
import Consultas from "./pages/consultas";
import Usuarios from "./pages/usuarios";
import Salas from "./pages/salas";
import Equipamentos from "./pages/equipamentos";
import Grupos from "./pages/grupos";
import Pacotes from "./pages/pacotes";
import MinhaEmpresa from "./pages/empresa";
import CadastroEmpresa from "./pages/cadastro_empresa";
import AlterarSenha from "./pages/alterarSenha";
import Unidades from "./pages/unidades";
import Feriados from "./pages/feriados";
import FormasPagamento from "./pages/FormasPagamento";
import ControleEstoque from "./pages/controleEstoque";
import ResumoCliente from "./pages/ResumoCliente"; 
import Ferramentas from "./pages/ferramentas";
import Documentos from "./pages/documentos";


import Main from "./components/main"; // ✅ Certifique-se de que este é o novo main.jsx
import Parametros from "./pages/parametros";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rota pública */}
          <Route path="/" element={<Login />} />
          <Route path="/cadastro_empresa" element={<CadastroEmpresa />} />

          {/* Rota protegida com layout Main */}
            <Route path="/" element={<Main />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="agendamento" element={<Agendamento />} />
            <Route path="caixa" element={<Caixa />} />
            <Route path="clientes" element={<Clientes />} />
            <Route path="cadastros" element={<Cadastros />} />
            <Route path="produtos" element={<Produtos />} />
            <Route path="servicos" element={<Servicos />} />
            <Route path="financeiro" element={<Financeiro />} />
            <Route path="compras" element={<Compras />} />
            <Route path="consultas" element={<Consultas />} />
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="parametros" element={<Parametros />} />
            <Route path="ajuda" element={<Ajuda />} />
            <Route path="salas" element={<Salas />} />
            <Route path="equipamentos" element={<Equipamentos />} />
            <Route path="grupos" element={<Grupos />} />
            <Route path="pacotes" element={<Pacotes />} />
            <Route path="empresa" element={<MinhaEmpresa />} />
            <Route path="/alterarSenha" element={<AlterarSenha />} />
            <Route path="unidades" element={<Unidades />} />
            <Route path="feriados" element={<Feriados />} />
            <Route path="formasPagamento" element={<FormasPagamento />} />
            <Route path="controleEstoque" element={<ControleEstoque />} />
            <Route path="resumoCliente" element={<ResumoCliente />} />
            <Route path="/clientes/:id/resumo" element={<ResumoCliente />} />
            <Route path="ferramentas" element={<Ferramentas />} />
            <Route path="documentos" element={<Documentos />} />
            
            
</Route>

          {/* Qualquer outra rota redireciona para login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
