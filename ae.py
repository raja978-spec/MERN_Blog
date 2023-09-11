# Sample list of text documents
documents = [
    "This is the first document.",
    "Second document: Here is some more text.",
    "And this is the third document.",
    "Is this the first document again?",
]
# Create an inverted index using a basic index algorithm
index = {}  
for doc_id, document in enumerate(documents): 
    words = document.lower().split() # ['this', 'is', 'the', 'first', 'document.']
    print(words) 
    for word in words:
        if word not in index:
            index[word] = [] # {'this':[]}
        index[word].append(doc_id)
print(index)  # {'this': [0, 2, 3], 'is': [0, 1, 2, 3], ...}
# Perform a filter operation to find documents containing a specific word
search_word = "this"
if search_word in index:  # "first" in {'this': [0, 2, 3], 'is': [0, 1, 2, 3], ...}
    matching_docs = index[search_word] # index["this"]
    print(f"Documents containing '{search_word}':")
    for doc_id in matching_docs: # [0,2,3]
        print(documents[doc_id]) # documents[0],[2],[3]
else:
    print(f"'{search_word}' not found in any document.")
