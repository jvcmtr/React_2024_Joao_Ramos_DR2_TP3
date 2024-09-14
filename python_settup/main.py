import os

_PATH = './src/exercises/Exercise@.jsx'
txt = ''
curr_ex = '0'

def escrever_arquivo(path, str, type='w'):
    try:
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, type, encoding='utf8') as file:
            file.write(str)
        print(f" atualizado o arquivo : {path}")
    except :
        print(f"@ERRO ao escrever o arquivo: {Exception}")


def ler_arquivo(path):
    try:
        f = open(path, "r",  encoding="utf8")
        return "" + f.read()
    except:
        print(f"@ERRO ao ler o arquivo: {path}")
        return ""

def path(i):
    global _PATH
    return _PATH.replace("@", i)
    
def end_ex():
    global curr_ex, txt
    if curr_ex == "0":
        return
    p = path(curr_ex)
    file = txt + ler_arquivo(p)
    escrever_arquivo( p, file)


def start_ex(line):
    global curr_ex, txt
    txt = ""
    curr_ex = line[10:12].replace(":", "")
    if len(curr_ex) < 2:
        curr_ex = '0'+curr_ex
    
def main():
    global txt, tarefa
    a = ler_arquivo('./python_settup/enunciado.txt').replace("\n\n", "\n")
    for line in a.split('\n'):
        if line[0] in '0123456789':
            continue
        elif 'Exercício ' in line :
            end_ex()
            start_ex(line)
        else:
            txt += '//' + line + '\n'
    end_ex()

if __name__ == '__main__':
  main()