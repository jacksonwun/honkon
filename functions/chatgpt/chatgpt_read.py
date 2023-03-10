import re

def json_chatgpt_string(content):
    print(content)
    output_json = {}   
    reg_list = ['English Title', 'Chinese Title', 'slug', 'English Description', 'Chinese Description', 'English Content', 'Chinese Content','tags']

    for i in range(0, len(reg_list)):
        if i == len(reg_list)-1:
            regex_pattern = r"'%s':(.*?)'(.*?)'(.*?)" % (reg_list[i])
        else:
            regex_pattern = r"'%s':(.*?)'(.*?)'(.*?)'%s'" % (reg_list[i] , reg_list[i+1])
        match = re.findall(regex_pattern, content, re.DOTALL)
            
        if match:
            if match[0]:
                if match[0][1]:
                    output_json[reg_list[i]]=match[0][1]

    return output_json

if __name__ == "__main__":
    with open('input/output_chatgpt.txt',"r",encoding='utf-8') as f:
        contents = f.read()
        print(contents)

    print(json_chatgpt_string(contents))
    