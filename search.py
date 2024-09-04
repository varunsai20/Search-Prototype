from transformers import pipeline
from huggingface_hub import login

# Login with your Hugging Face token
login(token="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")

# Load the text-generation pipeline with the chosen model
pipe = pipeline("text-generation", model="epfl-llm/meditron-7b")



# Define the context and question
context = """
Breast cancer affects one in seven women worldwide during their lifetime. Widespread mammographic screening programs 
and education campaigns allow for early detection of the disease, often during its asymptomatic phase. Current practice in
treatment and recurrence monitoring is based primarily on pathological evaluations but can also encompass genomic evaluations,
both of which focus on the primary tumor. Although breast cancer is one of the most studied cancers, patients still recur at a 
rate of up to 15% within the first 10 years post-surgery. Local recurrence was originally attributed to tumor cells contaminating 
histologically normal (HN) tissues beyond the surgical margin, but advances in technology have allowed for the identification 
of distinct aberrations that exist in the peri-tumoral tissues themselves. One leading theory to explain this phenomenon is the 
field cancerization theory. Under this hypothesis, tumors arise from a field of molecularly altered cells that create a permissive
environment for malignant evolution, which can occur with or without morphological changes. The traditional histopathology
paradigm dictates that molecular alterations are reflected in the tissue phenotype. However, the spectrum of inter-patient 
variability of normal breast tissue may obfuscate recognition of a cancerized field during routine diagnostics. In this review,
we explore the concept of field cancerization focusing on HN peri-tumoral tissues: we present the pathological and molecular 
features of field cancerization within these tissues and discuss how the use of peri-tumoral tissues can affect research.
Our observations suggest that pathological and molecular evaluations could be used synergistically to assess risk and 
guide the therapeutic management of patients. © 2022 The Authors. 
The Journal of Pathology published by John Wiley & Sons Ltd on behalf of The Pathological Society of Great Britain and Ireland. 
"""
question = "What is the field cancerization theory?"

prompt = f"Context: {context}\n\nQuestion: {question}\nAnswer:"

# Generate the answer using the text-generation model
generated_text = pipe(prompt, max_length=512, num_return_sequences=1)

# Extract and print the answer
answer = generated_text[0]['generated_text'].split('Answer:')[1].strip()
print("Question:", question)
print("Answer:", answer)