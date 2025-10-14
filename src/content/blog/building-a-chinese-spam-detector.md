---
pubDatetime: 2022-12-21
title: Building a Chinese SMS Spam Detector - Comparing Traditional ML and Deep Learning
featured: false
draft: false
tags:
  - ai
  - project
# ogImage: https://lambozhuangme.blob.core.windows.net/blog-images/ai-vs-real-faces/poster.png
description:
  A project building a spam detector for Chinese text messages using both traditional machine learning and deep learning approaches. Comparing the two methods and discussing their pros and cons.
---

I recently completed a project building a spam detector for Chinese text messages. The goal was straightforward: automatically classify SMS messages as spam or legitimate. Working with Chinese text added some interesting challenges, and I got to compare two different approaches - traditional machine learning and deep learning.

[GitHub Link](https://github.com/Lambozhuang/sms-spam-chinese)

## Table of contents


## The Problem and Dataset

The project uses a dataset of Chinese SMS messages labeled as either spam or ham (legitimate messages). The initial dataset was imbalanced, with significantly more ham than spam messages. To prevent the model from simply predicting "not spam" for everything, I sampled 50,000 messages from each class to create a balanced training set.

## Approach 1: Traditional Machine Learning

The first approach uses classic machine learning techniques with a focus on feature engineering.

### Text Processing with Jieba

Chinese text presents a unique challenge because there are no spaces between words. I used **Jieba**, a Chinese word segmentation library, to tokenize the text into individual words. This step is critical for any Chinese NLP task since the computer needs to understand word boundaries.

### Feature Extraction with TF-IDF

For feature extraction, I implemented **TF-IDF (Term Frequency-Inverse Document Frequency)**, which works in two parts:

- **Term Frequency (TF)**: Measures how frequently a word appears in a document
- **Inverse Document Frequency (IDF)**: Measures how rare a word is across all documents

The combination gives higher weights to words that appear frequently in a specific document but rarely across the entire corpus. This helps identify distinctive words that are good indicators of spam, like "prize" or "free," while downweighting common words that appear everywhere.

### Classification with Logistic Regression

After converting the text into TF-IDF features, I trained a **Logistic Regression** classifier. Despite its name, logistic regression is used for classification tasks. It creates a decision boundary to separate spam from ham messages based on the TF-IDF features. This approach is computationally efficient and provides interpretable results.

## Approach 2: Deep Learning with LSTM

The second approach uses a neural network architecture designed for sequential data.

### Understanding LSTM Networks

**LSTM (Long Short-Term Memory)** networks are a type of recurrent neural network designed to handle sequential data like text. Unlike traditional neural networks that process each word independently, LSTMs maintain an internal memory state that allows them to consider context from earlier in the sequence. This is particularly useful for understanding phrases where word order and context matter.

### Model Architecture

The LSTM model consists of several layers:

1. **Embedding Layer**: Converts each word into a 400-dimensional vector representation. This creates a dense representation where semantically similar words are positioned closer together in the vector space.

2. **LSTM Layers**: Two LSTM layers with 256 hidden units each process the sequence and maintain context throughout the message.

3. **Dropout Layer**: Applied at 20% to prevent **overfitting**, where the model memorizes training data rather than learning generalizable patterns.

4. **Output Layer**: Uses a **sigmoid activation function** to output a probability between 0 and 1, where values closer to 1 indicate spam.

### Training Process

The training process involved several techniques to improve model performance:

- **Batch Processing**: Processing 200 messages at a time for computational efficiency
- **Gradient Clipping**: Limiting gradient magnitude to prevent unstable training
- **Early Stopping**: Saving the model when validation loss improves, preventing overfitting on training data

Training ran for 2 epochs with continuous validation to monitor performance.

## Results and Comparison

Both approaches performed well at classifying Chinese SMS spam. The traditional ML approach with TF-IDF and Logistic Regression was faster to train and easier to interpret. The LSTM approach offered more sophisticated pattern recognition capabilities, particularly for understanding context and word order.

I implemented custom prediction functions for both models that preprocess new messages through the same pipeline and return real-time classifications.

## Key Takeaways

**Traditional ML remains relevant**: Simpler models like Logistic Regression can be highly effective. Starting with a baseline approach helps understand the problem before moving to more complex solutions.

**Chinese text requires specialized tools**: The lack of natural word boundaries in Chinese makes proper segmentation essential. Libraries like Jieba are necessary for preprocessing.

**Deep learning trades complexity for power**: LSTM networks can capture more complex patterns but require more data, computational resources, and training time.

**Data preprocessing is fundamental**: The majority of development time went into cleaning and preparing the text data. Quality preprocessing directly impacts model performance.

**Iterative development works**: Starting with a simple approach and gradually increasing complexity provided better understanding and served as a useful comparison baseline.

## Technical Stack

- **Python** for implementation
- **scikit-learn** for traditional ML (TF-IDF, Logistic Regression)
- **PyTorch** for deep learning (LSTM implementation)
- **Keras** for tokenization and sequence preprocessing
- **Jieba** for Chinese word segmentation
- **Pandas** and **NumPy** for data manipulation

## Conclusion

This project provided hands-on experience with both traditional and modern machine learning approaches for text classification. Comparing the two methods highlighted their respective strengths: traditional ML for interpretability and speed, deep learning for capturing complex patterns. Both have their place depending on the specific requirements of the task.

The complete code is available on GitHub for anyone interested in exploring Chinese text classification or comparing ML approaches.

