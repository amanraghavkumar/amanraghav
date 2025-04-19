export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "Dianmond Price Prediction",
    title: "Diamond Price Prediction ",
    description: "A machine learning model that analyzes Twitter data to determine sentiment. Uses NLP techniques with BERT for classification.",
    image: "diamond.jpg",
    category: "Machine Learning",
    tags: ["Python", "Scikit-learn", "Pandas"],
    githubUrl: "https://github.com/amanraghavkumar/Diamond_price_prediction",
    demoUrl: "https://youtu.be/BHBTKc_U4xQ"
  },
  {
    id: "Diabetes prediction",
    title: "Diabetes Prediction",
    description: "A convolutional neural network (CNN) built with TensorFlow for image classification tasks. Trained on a custom dataset.",
    image: "diabetes.jpg",
    category: "Machine Learning",
    tags: ["Python", "Scikit-learn" ,"Pandas"],
    githubUrl: "https://github.com/amanraghavkumar/Diabetes_Prediction",
    demoUrl: "https://youtu.be/AnD4bU35HKU"
  },
  {
    id: "stock-prediction",
    title: "Infosys Stock Price Prediction",
    description: "Time series forecasting model using LSTM neural networks to predict stock prices based on historical data.",
    image: "stock.jpg",
    category: "Time Series Analysis",
    tags: ["Python", "LSTM", "Keras", "Finance"],
    githubUrl: "https://github.com/amanraghavkumar/infosys",
    demoUrl: "https://stock-prediction-demo.herokuapp.com"
  },
  {
    id: "recommendation-system",
    title: "Movie Recommendation System",
    description: " Comming soon ...",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Recommendation Systems",
    tags: ["Python", "Scikit-learn", "Collaborative Filtering"],
    githubUrl: "https://github.com/amanraghavkumar/movie-recommender"
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    description: "Comming soon ...",
    image: "https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Anomaly Detection",
    tags: ["Python", "Random Forest", "XGBoost", "Fraud Detection"],
    githubUrl: "https://github.com/amanraghavkumar/fraud-detection"
  },
  {
    id: "chatbot-assistant",
    title: "AI Chatbot Assistant",
    description: "Comming soon ...",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Conversational AI",
    tags: ["Python", "Transformers", "NLP", "Dialog Systems"],
    githubUrl: "https://github.com/amanraghavkumar/ai-chatbot",
    demoUrl: "https://ai-chatbot-demo.vercel.app"
  }
];