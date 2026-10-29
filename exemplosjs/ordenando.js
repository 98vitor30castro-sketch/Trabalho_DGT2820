// Função para trocar os valores de posição
const swap = (vetor, pos1, pos2) => {
    let aux = vetor[pos1];
    vetor[pos1] = vetor[pos2];
    vetor[pos2] = aux;
};

// Função para embaralhar o vetor
const shuffle = (vetor, qtdTrocas) => {
    for (let i = 0; i < qtdTrocas; i++) {
        let sorteio1 = Math.floor(Math.random() * vetor.length);
        let sorteio2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, sorteio1, sorteio2);
    }
};

// Algoritmo Bubble Sort
const bubble_sort = (vetor) => {
    let tamanho = vetor.length;
    for (let i = 0; i < tamanho - 1; i++) {
        for (let j = 0; j < tamanho - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
    return vetor;
};

// Algoritmo Selection Sort
const selection_sort = (vetor) => {
    let tamanho = vetor.length;
    for (let i = 0; i < tamanho - 1; i++) {
        let menor = i;
        for (let j = i + 1; j < tamanho; j++) {
            if (vetor[j] < vetor[menor]) {
                menor = j;
            }
        }
        swap(vetor, menor, i);
    }
    return vetor;
};

// Algoritmo Quick Sort (recursivo)
const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        let pivo = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, pivo - 1);
        quick_sort(vetor, pivo + 1, fim);
    }
    return vetor;
};

// Apoio para o Quick Sort
const particionamento = (vetor, inicio, fim) => {
    let valorPivo = vetor[fim];
    let i = inicio - 1;
    for (let j = inicio; j <= fim - 1; j++) {
        if (vetor[j] < valorPivo) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};