Search.setIndex({"docnames": ["got_fatality_predictor_book"], "filenames": ["got_fatality_predictor_book.ipynb"], "titles": ["Predicting Character Deaths in Game of Thrones"], "terms": {"we": 0, "build": 0, "tool": 0, "whether": 0, "given": 0, "from": 0, "book": 0, "surviv": 0, "end": 0, "seri": 0, "To": 0, "do": 0, "thi": 0, "implement": 0, "logist": 0, "regress": 0, "model": 0, "data": 0, "set": 0, "contain": 0, "inform": 0, "The": 0, "abl": 0, "achiev": 0, "accuraci": 0, "ani": 0, "better": 0, "than": 0, "65": 0, "like": 0, "due": 0, "an": 0, "absenc": 0, "strong": 0, "pattern": 0, "plot": 0, "cast": 0, "would": 0, "allow": 0, "us": 0, "easili": 0, "answer": 0, "question": 0, "popular": 0, "novel": 0, "georg": 0, "r": 0, "martin": 0, "take": 0, "place": 0, "fiction": 0, "world": 0, "inspir": 0, "medeiv": 0, "europ": 0, "warfar": 0, "violenc": 0, "ar": 0, "central": 0, "lead": 0, "frequent": 0, "casualti": 0, "among": 0, "expans": 0, "exactli": 0, "which": 0, "fate": 0, "die": 0, "befor": 0, "ha": 0, "becom": 0, "topic": 0, "heat": 0, "specul": 0, "In": 0, "analysi": 0, "try": 0, "come": 0, "grief": 0, "base": 0, "s": 0, "attribut": 0, "consid": 0, "creat": 0, "societi": 0, "avail": 0, "through": 0, "compris": 0, "comprehens": 0, "list": 0, "appear": 0, "For": 0, "each": 0, "number": 0, "nobl": 0, "thei": 0, "relat": 0, "theirs": 0, "alreadi": 0, "dead": 0, "final": 0, "still": 0, "aliv": 0, "A": 0, "concern": 0, "our": 0, "have": 0, "seen": 0, "column": 0, "fill": 0, "almost": 0, "complet": 0, "miss": 0, "valu": 0, "These": 0, "repres": 0, "onli": 0, "known": 0, "veri": 0, "small": 0, "minor": 0, "parent": 0, "who": 0, "heir": 0, "decid": 0, "drop": 0, "were": 0, "entir": 0, "isalivefath": 0, "other": 0, "case": 0, "hous": 0, "where": 0, "thu": 0, "belong": 0, "new": 0, "categori": 0, "No": 0, "also": 0, "great": 0, "uniqu": 0, "simplic": 0, "sake": 0, "keep": 0, "most": 0, "common": 0, "all": 0, "ag": 0, "unknown": 0, "about": 0, "half": 0, "median": 0, "heatmap": 0, "illustr": 0, "correl": 0, "featur": 0, "isal": 0, "none": 0, "particularli": 0, "seem": 0, "make": 0, "sens": 0, "There": 0, "notabl": 0, "posit": 0, "4": 0, "chanc": 0, "being": 0, "aren": 0, "t": 0, "neg": 0, "realtion": 0, "suggest": 0, "whose": 0, "famili": 0, "deplet": 0, "tend": 0, "stori": 0, "df": [], "pd": [], "read_csv": [], "predictions_pos": [], "csv": [], "isna": [], "mean": [], "nameerror": [], "traceback": [], "recent": [], "call": [], "last": [], "cell": [], "1": 0, "line": [], "3": 0, "name": 0, "defin": [], "fill_nan_col": [], "titl": 0, "dateofbirth": 0, "cultur": 0, "drop_col": [], "plod": 0, "isalivemoth": 0, "isaliveheir": 0, "isalivespous": 0, "father": 0, "mother": 0, "spous": 0, "dateofdeath": 0, "less_frequent_col": [], "x": [], "preprocess_input": [], "clean": 0, "construct": 0, "transform": 0, "prepar": 0, "machin": 0, "learn": 0, "purpos": 0, "tri": 0, "select": 0, "differ": 0, "dummi": 0, "k": 0, "nn": 0, "svm": 0, "found": 0, "perform": 0, "best": 0, "f1": 0, "score": 0, "test_f1": 0, "0": 0, "427": 0, "so": 0, "undertook": 0, "random": 0, "hyper": 0, "paramet": 0, "optim": 0, "fine": 0, "tune": 0, "visualize_correl": [], "ax": [], "center": [], "y": [], "map": [], "class": 0, "inplac": [], "true": [], "axi": [], "x_train": [], "x_test": [], "y_train": [], "y_test": [], "train_test_split": [], "test_siz": [], "20": 0, "random_st": [], "123": [], "preprocessor": [], "create_pipelin": [], "best_model": [], "random_search": [], "create_model": [], "save_path": [], "cv": [], "5": 0, "short_result": [], "param_logisticregression__c": 0, "param_logisticregression__max_it": 0, "param_logisticregression__class_weight": 0, "mean_test_scor": 0, "mean_fit_tim": 0, "mean_train_scor": 0, "000002": [], "500": 0, "balanc": 0, "538163": [], "062280": [], "524183": [], "2000": 0, "537184": [], "064761": [], "524049": [], "2": 0, "16": 0, "237767": [], "519687": [], "151212": [], "529217": [], "69": 0, "51928": [], "518309": [], "161608": [], "529784": [], "297": [], "635144": [], "1500": [], "517774": [], "158645": [], "529661": [], "out": 0, "deploi": 0, "test": 0, "y_pred": [], "class_report": [], "classification_report": [], "print": [], "precis": 0, "recal": 0, "support": 0, "85": [], "62": [], "72": [], "294": [], "37": [], "68": [], "47": [], "96": [], "63": [], "390": [], "macro": [], "avg": [], "61": [], "59": [], "weight": 0, "73": [], "66": [], "precisionrecalldisplai": [], "from_estim": [], "sklearn": [], "metric": [], "_plot": [], "precision_recall_curv": [], "0x408b12a050": [], "curv": 0, "roccurvedisplai": [], "roc_curv": [], "0x40a5fab890": [], "roc": 0, "both": 0, "di": 0, "compar": 0, "howev": 0, "much": 0, "lower": 0, "indic": 0, "bit": 0, "too": 0, "quick": 0, "demis": 0, "could": 0, "perhap": 0, "improv": 0, "futur": 0, "alter": 0, "overal": 0, "fairli": 0, "unimpress": 0, "correctli": 0, "while": 0, "might": 0, "disappoint": 0, "did": 0, "surpris": 0, "discourag": 0, "celebr": 0, "author": 0, "master": 0, "teller": 0, "fact": 0, "can": 0, "testament": 0, "qualiti": 0, "hi": 0, "write": 0, "rather": 0, "inadequaci": 0, "Of": 0, "cours": 0, "larg": 0, "humer": 0, "unlik": 0, "impact": 0, "beyond": 0, "project": 0, "nevertheless": 0, "interest": 0, "quanitit": 0, "assess": 0, "plotlin": 0, "2016": 0, "request": 0, "http": 0, "joel": 0, "\u00f6stblom": 0, "2023": 0, "dsci531": 0, "note": 0, "page": 0, "github": 0, "ubc": 0, "ca": 0, "md": 0, "24": 0, "dsci_531_viz": 0, "1_student": 0, "lectur": 0, "eda": 0, "html": 0, "varada": 0, "kolhatkar": 0, "dsci571": 0, "dsci_571_sup": 0, "00_motiv": 0, "dsci573": 0, "dsci_573_feat": 0, "select_stud": 0, "readm": 0, "import": [], "panda": [], "myst_nb": [], "glue": [], "short_results_df": [], "tabl": [], "random_search_scor": [], "displai": [], "fals": [], "filenotfounderror": [], "file": [], "miniconda3": [], "env": [], "522": [], "lib": [], "site": [], "packag": [], "io": [], "parser": [], "reader": [], "py": [], "948": [], "filepath_or_buff": [], "sep": [], "delimit": [], "header": [], "index_col": [], "usecol": [], "dtype": [], "engin": [], "convert": [], "true_valu": [], "false_valu": [], "skipinitialspac": [], "skiprow": [], "skipfoot": [], "nrow": [], "na_valu": [], "keep_default_na": [], "na_filt": [], "verbos": [], "skip_blank_lin": [], "parse_d": [], "infer_datetime_format": [], "keep_date_col": [], "date_pars": [], "date_format": [], "dayfirst": [], "cache_d": [], "iter": [], "chunksiz": [], "compress": [], "thousand": [], "decim": [], "linetermin": [], "quotechar": [], "quot": [], "doublequot": [], "escapechar": [], "comment": [], "encod": [], "encoding_error": [], "dialect": [], "on_bad_lin": [], "delim_whitespac": [], "low_memori": [], "memory_map": [], "float_precis": [], "storage_opt": [], "dtype_backend": [], "935": [], "kwds_default": [], "_refine_defaults_read": [], "936": [], "937": [], "944": [], "945": [], "946": [], "kwd": [], "updat": [], "return": [], "_read": [], "611": [], "608": [], "_validate_nam": [], "get": [], "610": [], "textfileread": [], "613": [], "614": [], "1448": [], "__init__": [], "self": [], "f": [], "1445": [], "option": [], "has_index_nam": [], "1447": [], "handl": [], "iohandl": [], "_engin": [], "_make_engin": [], "1705": [], "1703": [], "b": [], "mode": [], "1704": [], "get_handl": [], "1706": [], "1707": [], "1708": [], "1709": [], "1710": [], "1711": [], "is_text": [], "1712": [], "error": [], "strict": [], "1713": [], "1714": [], "1715": [], "assert": [], "1716": [], "863": [], "path_or_buf": [], "858": [], "elif": [], "isinst": [], "str": [], "859": [], "check": [], "filenam": [], "open": [], "binari": [], "860": [], "doe": [], "newlin": [], "861": [], "ioarg": [], "862": [], "864": [], "865": [], "866": [], "867": [], "868": [], "869": [], "870": [], "els": [], "871": [], "872": [], "errno": [], "directori": [], "tag": [], "remov": [], "input": [], "round": [], "000": 0, "516": 0, "020": 0, "518": 0, "048": 0, "100": 0, "502": 0, "038": 0, "886": 0, "501": 0, "041": 0, "519": 0, "498": 0, "042": 0, "525": 0, "grid": 0, "search": 0, "cross": 0, "valid": 0, "shown": 0, "below": 0, "classif": 0, "report": 0, "along": 0, "reciev": 0, "oper": 0, "characterist": 0, "876984": 0, "609235": 0, "718991": 0, "1451": 0, "000000": 0, "395522": 0, "749495": 0, "517795": 0, "495": 0, "644913": 0, "636253": 0, "679365": 0, "618393": 0, "1946": 0, "754516": 0, "667813": 0, "percent": 0, "nan": 0, "517986": 0, "male": 0, "652107": 0, "6": 0, "777492": 0, "7": 0, "771840": 0, "8": 0, "989209": 0, "9": 0, "986639": 0, "10": 0, "988181": 0, "11": 0, "219424": 0, "12": 0, "858171": 0, "13": 0, "book1": 0, "14": 0, "book2": 0, "15": 0, "book3": 0, "book4": 0, "17": 0, "book5": 0, "18": 0, "19": 0, "21": 0, "22": 0, "ismarri": 0, "23": 0, "isnobl": 0, "25": 0, "numdeadrel": 0, "26": 0, "booldeadrel": 0, "27": 0, "ispopular": 0, "28": 0, "29": 0}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"predict": 0, "charact": 0, "death": 0, "game": 0, "throne": 0, "summari": 0, "introduct": 0, "method": 0, "result": 0, "discuss": 0, "refer": 0}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})