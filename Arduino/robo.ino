
int mr1 = 8; // motor direito 1
int mr2 = 9; // motor direito 2
int ml1 = 10; // motor esquerdo 1
int ml2 = 11; // motor esquerdo 2
int sr = 6; // sensor direito
int sl = 7; // sensor esquerdo
int svr = 0;
int svl = 0;
int enr = 3; // pino PWM para motor direito
int enl = 5; // pino PWM para motor esquerdo
int vspeed = 100; // velocidade dos motores (0 a 255)
int tspeed = 255; // velocidade máxima para curvas
int tdelay = 20; // atraso para curvas

void setup() {
  pinMode(mr1, OUTPUT);
  pinMode(mr2, OUTPUT);
  pinMode(ml1, OUTPUT);
  pinMode(ml2, OUTPUT);
  pinMode(sr, INPUT);
  pinMode(sl, INPUT);
  pinMode(enr, OUTPUT);
  pinMode(enl, OUTPUT);
  delay(5000); // aguarda 5 segundos antes de iniciar
}

void loop() {
  svr = digitalRead(sr);
  svl = digitalRead(sl);

  if (svl == LOW && svr == LOW) {
    forward(); // mover para frente
  }

  if (svl == HIGH && svr == LOW) {
    left(); // virar à esquerda
  }

  if (svl == LOW && svr == HIGH) {
    right(); // virar à direita
  }

  if (svl == HIGH && svr == HIGH) {
    stop(); // parar
  }
}

void forward() {
  digitalWrite(mr1, HIGH);
  digitalWrite(mr2, LOW);
  digitalWrite(ml1, HIGH);
  digitalWrite(ml2, LOW);
  analogWrite(enr, vspeed);
  analogWrite(enl, vspeed);
}

void backward() {
  digitalWrite(mr1, LOW);
  digitalWrite(mr2, HIGH);
  digitalWrite(ml1, LOW);
  digitalWrite(ml2, HIGH);
  analogWrite(enr, vspeed);
  analogWrite(enl, vspeed);
}

void right() {
  digitalWrite(mr1, LOW);
  digitalWrite(mr2, HIGH);
  digitalWrite(ml1, HIGH);
  digitalWrite(ml2, LOW);
  analogWrite(enr, tspeed);
  analogWrite(enl, tspeed);
  delay(tdelay);
}

void left() {
  digitalWrite(mr1, HIGH);
  digitalWrite(mr2, LOW);
  digitalWrite(ml1, LOW);
  digitalWrite(ml2, HIGH);
  analogWrite(enr, tspeed);
  analogWrite(enl, tspeed);
  delay(tdelay);
}

void stop() {
  analogWrite(enr, 0);
  analogWrite(enl, 0);
}
