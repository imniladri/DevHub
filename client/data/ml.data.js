/* ********************************************************** */
// All ML Libraries Data Object
/* ********************************************************** */

let mlData = [
	{
		id: 1,
		lib_name: " NumPy",
		lib_details: "Numpy is used for handling multi-dimensional data and intricate mathematical functions.",
		lib_color: "#6610f2",
		lib_link: "https://numpy.org/",
	},
    {
		id: 2,
		lib_name: "Pandas",
		lib_details: "Pandas is used for data manipulation for numerical data and time series.",
		lib_color: "#6610f2",
		lib_link: "https://pandas.pydata.org/",
	},
    {
		id: 3,
		lib_name: "SciPy",
		lib_details: "Scipy is one of the leading machine libraries for accomplishing scientific computation.",
		lib_color: "#6610f2",
		lib_link: "https://scipy.org/",
	},
    {
		id: 4,
		lib_name: "Matplotlib",
		lib_details: "Matplotlib is a ML library employed for producing publication-ready figures, images, and plots in a range of formats via 2D plotting.",
		lib_color: "#6610f2",
		lib_link: "https://matplotlib.org/",
	},
    {
		id: 5,
		lib_name: "Scikit-Learn",
		lib_details: "Scikit-learn provides a simple yet powerful fit-transform and predict paradigm to learn from data, transform the data and finally predict.",
		lib_color: "#6610f2",
		lib_link: "https://scikit-learn.org/",
	},
    {
		id: 6,
		lib_name: "Statsmodels",
		lib_details: "Statsmodels provides an extensive list of capabilities in the form of regression models, time series analysis, autoregression and so on.",
		lib_color: "#6610f2",
		lib_link: "https://www.statsmodels.org/",
	},
    {
		id: 7,
		lib_name: "XGBoost",
		lib_details: "One of the most widely used libraries/algorithms used in various data science competitions and real-world use cases",
		lib_color: "#6610f2",
		lib_link: "https://xgboost.readthedocs.io/",
	},
    {
		id: 8,
		lib_name: "LightGBM",
		lib_details: "Another distributed and fast variant of GBM (Gradient Boosting Machines), LightGBM is from the house of Microsoft.",
		lib_color: "#6610f2",
		lib_link: "https://lightgbm.readthedocs.io/",
	},
    {
		id: 9,
		lib_name: "ELI5",
		lib_details: "ELI5 is one such library which provides the capabilities to debug classifiers and provide an explanation around the predictions.",
		lib_color: "#6610f2",
		lib_link: "https://github.com/TeamHG-Memex/eli5",
	},
    {
		id: 10,
		lib_name: "Tensorflow",
		lib_details: "One of the most widely used libraries for both research and production environments.",
		lib_color: "#6610f2",
		lib_link: "https://www.tensorflow.org/",
	},
    {
		id: 11,
		lib_name: "PyTorch",
		lib_details: "Pytorch is a Facebook-developed ML library that is based on the Torch Library.",
		lib_color: "#6610f2",
		lib_link: "https://pytorch.org/",
	},
    {
		id: 12,
		lib_name: "Keras",
		lib_details: "Keras provides a Python interface of Tensorflow Library especially focused on AI neural networks",
		lib_color: "#6610f2",
		lib_link: "https://keras.io/",
	},
    {
		id: 13,
		lib_name: "MlPack",
		lib_details: "MlPack is mostly C++-based ML library that has bindings to Python other languages including R programming, Julia, and GO.",
		lib_color: "#6610f2",
		lib_link: "https://github.com/mlpack/mlpack",
	},
    {
		id: 14,
		lib_name: "Armadillo",
		lib_details: "Armadillo is a linear algebra library employed for accomplishing the purposes of scientific computing.",
		lib_color: "#6610f2",
		lib_link: "http://arma.sourceforge.net/",
	},
    {
		id: 15,
		lib_name: "NLTK",
		lib_details: "NLTK is the widely used library for Text Classification and Natural Language Processing.",
		lib_color: "#6610f2",
		lib_link: "https://www.nltk.org/",
	},
	{
		id: 16,
		lib_name: "Gensim",
		lib_details: "Gensim is a fast and production ready NLP library. It is particularly designed for unsupervised topic modeling tasks apart from the usual set of NLP tasks.",
		lib_color: "#6610f2",
		lib_link: "https://radimrehurek.com/gensim/",
	},
	{
		id: 17,
		lib_name: "Seaborn",
		lib_details: "Seaborn is a library for making statistical graphics in Python. It builds on top of matplotlib and integrates closely with pandas data structures.",
		lib_color: "#6610f2",
		lib_link: "http://seaborn.pydata.org/",
	},
	{
		id: 18,
		lib_name: "Plotly",
		lib_details: "Plotly is a production grade visualization platform with wrappers in not just python but other languages like R, Julia, MATLAB, etc.",
		lib_color: "#6610f2",
		lib_link: "https://plot.ly/",
	},
	{
		id: 19,
		lib_name: "OpenCV",
		lib_details: "OpenCV is an open-source platform dedicated to computer vision and image processing.",
		lib_color: "#6610f2",
		lib_link: "https://opencv.org/",
	},
	{
		id: 20,
		lib_name: "OpenNN",
		lib_details: "OpenNN is an open-source ML library that leverages ML techniques for solving data mining and predictive analytics problems across various fields.",
		lib_color: "#6610f2",
		lib_link: "https://www.opennn.net/",
	},
	{
		id: 21,
		lib_name: "Theano",
		lib_details: "Theano is one of the speediest machine learning libraries for manipulating and evaluating mathematical expressions",
		lib_color: "#6610f2",
		lib_link: "https://developers.google.com/fonts/docs/developer_api",
	},
];

/* ********************************************************** */
// All ML Libraries Preview Mapping
/* ********************************************************** */

let mlLibrary = document.querySelector(".libraries");

Object.values(mlData).map((val) => {
	mlLibrary.innerHTML += `
        <!-- Library ${val.id} -->
        <div class="lib_card">
            <h2>${val.lib_name}</h2>
            <p>${val.lib_details}</p>
            <a
                href="${val.lib_link}"
                class="btn lib_link"
                target="_blank"
            >
                See Now
            </a>
        </div>
    `;
});
