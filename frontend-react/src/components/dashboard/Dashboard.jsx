import { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [ticker, setTicker] = useState('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [plot, setPlot] = useState();
  const [ma100, setMA100] = useState();
  const [ma200, setMA200] = useState();
  const [prediction, setPrediction] = useState();
  const [mse, setMSE] = useState();
  const [rmse, setRMSE] = useState();
  const [r2, setR2] = useState();
  const [nextDayPrice, setNextDayPrice] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post('/predict/', { ticker });
      const backendRoot = import.meta.env.VITE_BACKEND_ROOT;

      setPlot(`${backendRoot}${response.data.plot_img}`);
      setMA100(`${backendRoot}${response.data.plot_100_dma}`);
      setMA200(`${backendRoot}${response.data.plot_200_dma}`);
      setPrediction(`${backendRoot}${response.data.plot_prediction}`);
      setMSE(response.data.mse);
      setRMSE(response.data.rmse);
      setR2(response.data.r2);
      setNextDayPrice(response.data.predicted_next_day_price);

      if (response.data.error) {
        setError(response.data.error);
      }
    } catch (error) {
      console.error('API request error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {/* Form */}
      <form onSubmit={handleSubmit} className="text-center mt-5">
        <input type="text" className="form-control mb-2" placeholder="Enter Ticker" onChange={(e) => setTicker(e.target.value)} required />
        {error && <small className="text-danger">{error}</small>}
        <button type="submit" className="btn btn-primary w-100">{loading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'See Prediction'}</button>
      </form>

      {/* Results */}
      {prediction && (
        <div className="result text-center mt-4">
          <img src={plot} className="img-fluid mb-3" alt="Plot"/>
          <img src={ma100} className="img-fluid mb-3" alt="MA100"/>
          <img src={ma200} className="img-fluid mb-3" alt="MA200"/>
          <img src={prediction} className="img-fluid mb-3" alt="Prediction"/>

          <h4 className="mt-3">Evaluation</h4>
          <p>MSE: {mse}</p>
          <p>RMSE: {rmse}</p>
          <p>R2: {r2}</p>

          <h4 className="mt-4">Predicted Next Day Price : </h4>
          <h5>{nextDayPrice?.toFixed(2)}</h5>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
