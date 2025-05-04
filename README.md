# 📈 Stock Prediction Portal

A full-stack web application that leverages Long Short-Term Memory (LSTM) neural networks to predict stock prices. Built with Django and React, the portal provides users with insightful visualizations, including 100-day and 200-day moving averages, and evaluates model performance using RMSE and R² metrics.

## 🚀 Features : 

#### 1)Full-Stack Architecture: Django backend with a React frontend for a seamless user experience.

#### 2)LSTM Model: Utilizes LSTM networks built with Keras for time series forecasting.
#### 3)Financial Data Integration: Fetches real-time stock data from financial APIs.
#### 4)Moving Averages: Displays 100-day and 200-day moving averages for selected stocks.
#### 5)Next-Day Price Prediction: Predicts the next day's stock price based on historical data.
#### 6)Model Evaluation: Presents RMSE and R² scores to assess prediction accuracy.
#### 7)Interactive Visualizations: Graphical representation of stock trends and predictions.

## 🛠️ Technologies Used : 

#### 1)Backend: Django
#### 2)Frontend: React
#### 3)Machine Learning: Keras, TensorFlow
#### 4)Data Manipulation: Pandas, NumPy
#### 5)Data Visualization: Matplotlib
#### 6)API Integration: Financial data APIs (e.g., Yahoo Finance)
#### 7)Styling: CSS, Bootstrap

## 📷 Screenshots : 


### 1)Home page of the Stock Prediction Portal :

<img width="1447" alt="Screenshot 2025-05-04 at 6 25 41 PM" src="https://github.com/user-attachments/assets/c475a3e7-f6b3-4078-9fae-1da19b92366a" />


### 2)Feature Sets displayed in the Home Page : 

<img width="1450" alt="Screenshot 2025-05-04 at 6 26 01 PM" src="https://github.com/user-attachments/assets/1bc58054-871d-422d-82d1-afca3eae73e2" />


### 3)Stock analysis with moving averages and prediction :

#### Closing Price Plot for past 10 years :

<img width="1466" alt="Screenshot 2025-05-04 at 7 16 46 PM" src="https://github.com/user-attachments/assets/f7a59632-b13c-4e48-8688-efad5a2e9683" />


#### 100 Days Moving Average(100_DMA) of selected ticker :

<img width="1345" alt="image" src="https://github.com/user-attachments/assets/74bb8d5d-6b3f-439c-8497-653dfc219f6b" />


#### 200 Days Moving Average(200_DMA) of selected ticker : 

<img width="1386" alt="image" src="https://github.com/user-attachments/assets/f6166f91-9ecf-4cea-8de5-436a65e18f45" />


#### Final Prediction for ticker :

<img width="1374" alt="image" src="https://github.com/user-attachments/assets/9d6201ca-4e26-40e2-9231-33cc8a508029" />


#### Model Evaluation Metrics and Next Day Predicted Price of ticker : 

<img width="690" alt="image" src="https://github.com/user-attachments/assets/23c99282-49bc-4caa-a898-1f0a7e0d5fe7" />



Model evaluation metrics: RMSE,MSE and R².


## ⚙️ Installation : 

### Backend (Django)

1) Clone the repository:

#### git clone https://github.com/Aditya007777/stock-prediction-portal.git 
#### cd stock-prediction-portal/backend

2) Create a virtual environment:

#### python -m venv venv
#### source venv/bin/activate  # On Windows: venv\Scripts\activate

3) Install dependencies:

pip install -r requirements.txt

4) Apply migrations:

python manage.py migrate

5) Run the development server:

python manage.py runserver


### Frontend (React)

1) Navigate to the frontend directory:

cd ../frontend

2) Install dependencies:

npm install

3) Start the React development server:

npm run dev

4) Access the application:

Open your browser and navigate to http://localhost:5173

## 📈 Usage : 

### 1) Enter Stock Symbol:
Input the desired stock ticker symbol (e.g., AAPL, GOOGL).

### 2) View Analysis:
Observe the 100-day and 200-day moving averages.

### 3) Review the predicted next-day stock price.

### 4) Model Evaluation:
Check RMSE and R² scores to assess prediction accuracy.

## 🤝 Contributing : 

### Contributions are welcome! Please follow these steps:

### 1) Fork the repository.
### 2) Create a new branch: git checkout -b feature/your-feature-name.
### 3) Commit your changes: git commit -m 'Add your feature'.
### 4) Push to the branch: git push origin feature/your-feature-name.
### 5) Open a pull request.

## 📄 License : 

This project is licensed under the MIT License. See the LICENSE file for details.

## 📬 Contact : 

For any inquiries or feedback, please contact:

#### Name: Aditya Roy Karmakar
#### Email: roykarmakaraditya03@gmail.com
#### GitHub: Aditya007777






