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
    id: "sentiment-analysis",
    title: "Twitter Sentiment Analysis",
    description: "A machine learning model that analyzes Twitter data to determine sentiment. Uses NLP techniques with BERT for classification.",
    image: "https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Natural Language Processing",
    tags: ["Python", "BERT", "NLP", "Sentiment Analysis"],
    githubUrl: "https://github.com/amanraghavkumar/sentiment-analysis",
    demoUrl: "https://huggingface.co/spaces/demo-sentiment-analysis"
  },
  {
    id: "image-classifier",
    title: "Deep Learning Image Classifier",
    description: "A convolutional neural network (CNN) built with TensorFlow for image classification tasks. Trained on a custom dataset.",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Computer Vision",
    tags: ["Python", "TensorFlow", "CNN", "Deep Learning"],
    githubUrl: "https://github.com/amanraghavkumar/image-classifier"
  },
  {
    id: "stock-prediction",
    title: "Stock Price Prediction",
    description: "Time series forecasting model using LSTM neural networks to predict stock prices based on historical data.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Time Series Analysis",
    tags: ["Python", "LSTM", "Keras", "Finance"],
    githubUrl: "https://github.com/amanraghavkumar/stock-prediction",
    demoUrl: "https://stock-prediction-demo.herokuapp.com"
  },
  {
    id: "recommendation-system",
    title: "Movie Recommendation System",
    description: "Content-based and collaborative filtering recommendation system for movies using user ratings and movie metadata.",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Recommendation Systems",
    tags: ["Python", "Scikit-learn", "Collaborative Filtering"],
    githubUrl: "https://github.com/amanraghavkumar/movie-recommender"
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    description: "Machine learning model to detect fraudulent credit card transactions. Implements ensemble methods to improve accuracy.",
    image: "https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Anomaly Detection",
    tags: ["Python", "Random Forest", "XGBoost", "Fraud Detection"],
    githubUrl: "https://github.com/amanraghavkumar/fraud-detection"
  },
  {
    id: "chatbot-assistant",
    title: "AI Chatbot Assistant",
    description: "An intelligent chatbot built using transformer models that can answer questions and provide information on specific topics.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Conversational AI",
    tags: ["Python", "Transformers", "NLP", "Dialog Systems"],
    githubUrl: "https://github.com/amanraghavkumar/ai-chatbot",
    demoUrl: "https://ai-chatbot-demo.vercel.app"
  }
];