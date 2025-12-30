import { useState } from 'react';
import Background from "../assets/images/Backgroun2.png";
import Logo from "../assets/images/Union2.png";
import mail from "../assets/images/mail.png";
import passwo from "../assets/images/lock.png"
import { useNavigate } from 'react-router-dom';

export default function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log({ email, password });
    setTimeout(() => {
      setLoading(false);
      navigate('/Bakanes');
    }, 1000);

  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: `url(${Background})` }}>
      <div className="w-[581px] bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-center mb-6">
          <img
            src={Logo}
            alt="Be Kind Network"
            className="h-[71px]"
          />
        </div>

        <h2 className="text-center text-[28px] font-[400px] text-gray-800 mb-2">
          ¡Empieza a conectar tu comunidad ante buenas acciones!
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Correo Electrónico*
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400"> 
                <img
                src={mail}
                alt="Be Kind Network"
                className="h-[16px] w-[16px]"
              /></span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresar correo"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña*
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">                <img
                src={passwo}
                alt="Be Kind Network"
                className="h-[16px] w-[16px]"
              /></span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 text-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? '👁️‍🗨️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div className="text-center">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800 underline">
              Recuperar contraseña
            </a>
          </div>

          <button
            type="submit"
            disabled={loading || !email || !password}
            className={`w-full py-2 rounded-lg font-medium transition-colors ${
              email && password && !loading
                ? 'bg-[#1E1B4D] text-white hover:bg-[#16142a] cursor-pointer'
                : 'bg-[#D2D1D4] text-gray-400 cursor-not-allowed opacity-70'
            }`}
          >
            {loading ? 'Ingresando' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  );
}