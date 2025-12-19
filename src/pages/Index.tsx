import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Спасибо за обращение. Я свяжусь с вами в ближайшее время.",
    });
  };

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'portfolio', label: 'Портфолио', icon: 'Award' },
    { id: 'materials', label: 'Методическая копилка', icon: 'BookOpen' },
    { id: 'teachers', label: 'Для Вас, педагоги!', icon: 'Users' },
    { id: 'parents', label: 'Для Вас, родители!', icon: 'Heart' },
    { id: 'contact', label: 'Обратная связь', icon: 'Mail' },
  ];

  const achievements = [
    { title: 'Высшая квалификационная категория', year: '2023', type: 'Категория' },
    { title: 'Победитель конкурса "Воспитатель года"', year: '2022', type: 'Конкурс' },
    { title: 'Публикация в журнале "Дошкольное воспитание"', year: '2023', type: 'Публикация' },
    { title: 'Курсы повышения квалификации ФГОС ДО', year: '2024', type: 'Обучение' },
  ];

  const materials = [
    { title: 'Конспекты занятий по развитию речи', size: '2.5 MB', type: 'PDF' },
    { title: 'Картотека дидактических игр', size: '1.8 MB', type: 'PDF' },
    { title: 'Методические рекомендации по ФГОС', size: '3.2 MB', type: 'PDF' },
    { title: 'Сценарии праздников и развлечений', size: '4.1 MB', type: 'PDF' },
  ];

  const teacherResources = [
    { title: 'Планирование образовательной деятельности', size: '2.1 MB', type: 'DOCX' },
    { title: 'Диагностические материалы', size: '1.5 MB', type: 'PDF' },
    { title: 'Рабочие программы по возрастам', size: '3.8 MB', type: 'PDF' },
  ];

  const parentResources = [
    { title: 'Возрастные особенности детей', size: '1.2 MB', type: 'PDF' },
    { title: 'Консультации для родителей', size: '2.3 MB', type: 'PDF' },
    { title: 'Игры и упражнения для дома', size: '1.9 MB', type: 'PDF' },
    { title: 'Рекомендации по адаптации', size: '1.4 MB', type: 'PDF' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              ЮИ
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Юрьева Инна Анатольевна</h1>
              <p className="text-xs text-muted-foreground">Воспитатель высшей категории</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-1">
            {navigation.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? 'default' : 'ghost'}
                onClick={() => setActiveTab(item.id)}
                className="gap-2"
              >
                <Icon name={item.icon as any} size={16} />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <div className="md:hidden sticky top-16 z-40 bg-white border-b">
        <div className="container overflow-x-auto">
          <div className="flex gap-2 py-2 min-w-max">
            {navigation.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveTab(item.id)}
                className="gap-2 whitespace-nowrap"
              >
                <Icon name={item.icon as any} size={14} />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <main className="container py-8">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-secondary p-12 text-white">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl font-bold mb-4">Добро пожаловать!</h2>
                <p className="text-lg opacity-95 mb-6">
                  Персональный сайт воспитателя дошкольного образовательного учреждения. 
                  Здесь вы найдете полезные материалы, методические разработки и консультации.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                    <Icon name="GraduationCap" size={16} className="mr-2" />
                    Стаж 26 лет
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                    <Icon name="Award" size={16} className="mr-2" />
                    Высшая категория
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                    <Icon name="Star" size={16} className="mr-2" />
                    Победитель конкурсов
                  </Badge>
                </div>
              </div>
              <div className="absolute right-0 top-0 opacity-10 text-[200px] leading-none">
                🎨
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Target" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Миссия</CardTitle>
                  <CardDescription>
                    Создание условий для гармоничного развития личности каждого ребенка
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name="Lightbulb" className="text-secondary" size={24} />
                  </div>
                  <CardTitle>Подход</CardTitle>
                  <CardDescription>
                    Индивидуальный подход к каждому ребенку с учетом его особенностей и потребностей
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <Icon name="Heart" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Принципы</CardTitle>
                  <CardDescription>
                    Любовь, уважение, доброжелательность и профессионализм в работе
                  </CardDescription>
                </CardHeader>
              </Card>
            </section>

            <Card>
              <CardHeader>
                <CardTitle>О себе</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Здравствуйте! Я — воспитатель с высшей квалификационной категорией, имею педагогический стаж более 26 лет. 
                  Моя работа — это призвание, которому я отдаю всю душу.
                </p>
                <p>
                  В своей деятельности использую современные образовательные технологии, ориентируюсь на ФГОС ДО. 
                  Постоянно повышаю квалификацию, участвую в профессиональных конкурсах и делюсь опытом с коллегами.
                </p>
                <p>
                  Верю, что каждый ребенок уникален и талантлив. Моя задача — помочь раскрыть эти таланты, 
                  создать атмосферу тепла, уюта и творчества.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-2">Портфолио</h2>
              <p className="text-muted-foreground">Достижения и профессиональное развитие</p>
            </div>

            <div className="grid gap-4">
              {achievements.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" className="text-primary" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.year}</p>
                    </div>
                    <Badge variant="secondary">{item.type}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-accent/30">
              <CardHeader>
                <CardTitle>Направления работы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Речевое развитие</p>
                      <p className="text-sm text-muted-foreground">Формирование речевых навыков и коммуникации</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Познавательное развитие</p>
                      <p className="text-sm text-muted-foreground">Развитие любознательности и познавательной активности</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Социально-коммуникативное</p>
                      <p className="text-sm text-muted-foreground">Формирование социальных навыков и эмоционального интеллекта</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Художественно-эстетическое</p>
                      <p className="text-sm text-muted-foreground">Развитие творческих способностей и эстетического восприятия</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'materials' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-2">Методическая копилка</h2>
              <p className="text-muted-foreground">Авторские разработки и методические материалы</p>
            </div>

            <div className="grid gap-4">
              {materials.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-14 h-14 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      <Icon name="FileText" className="text-red-600" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="File" size={14} />
                          {item.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="HardDrive" size={14} />
                          {item.size}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Icon name="Download" size={16} />
                      Скачать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'teachers' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-2">Для Вас, педагоги!</h2>
              <p className="text-muted-foreground">Материалы для коллег и профессионального развития</p>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" className="text-primary" />
                  Информация для педагогов
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>
                  Уважаемые коллеги! В этом разделе вы найдете материалы для профессиональной деятельности: 
                  рабочие программы, диагностические материалы, планирование.
                </p>
                <p className="text-sm text-muted-foreground">
                  Все материалы соответствуют ФГОС ДО и прошли апробацию в практической работе.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {teacherResources.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon name="FileText" className="text-blue-600" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="File" size={14} />
                          {item.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="HardDrive" size={14} />
                          {item.size}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Icon name="Download" size={16} />
                      Скачать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'parents' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-2">Для Вас, родители!</h2>
              <p className="text-muted-foreground">Полезная информация для родителей воспитанников</p>
            </div>

            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Heart" className="text-pink-600" />
                  Дорогие родители!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>
                  Здесь вы найдете консультации, рекомендации и полезные материалы для развития ваших детей. 
                  Вместе мы создаем условия для счастливого детства!
                </p>
                <p className="text-sm text-muted-foreground">
                  Регулярно обновляю раздел новыми консультациями и практическими рекомендациями.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {parentResources.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-14 h-14 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                      <Icon name="FileHeart" className="text-purple-600" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="File" size={14} />
                          {item.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="HardDrive" size={14} />
                          {item.size}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Icon name="Download" size={16} />
                      Скачать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-2">Обратная связь</h2>
              <p className="text-muted-foreground">Свяжитесь со мной по любым вопросам</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                  <CardDescription>Я всегда рада ответить на ваши вопросы</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">pedagog@example.com</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Phone" className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Телефон</p>
                      <p className="font-medium">+7 (XXX) XXX-XX-XX</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="MapPin" className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Адрес</p>
                      <p className="font-medium">МБДОУ Детский сад №...</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Clock" className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Время работы</p>
                      <p className="font-medium">Пн-Пт: 7:00 - 19:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Напишите мне</CardTitle>
                  <CardDescription>Заполните форму, и я свяжусь с вами</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Ваше имя
                      </label>
                      <Input id="name" placeholder="Введите ваше имя" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Сообщение
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Напишите ваше сообщение..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full gap-2">
                      <Icon name="Send" size={16} />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-semibold">Юрьева Инна Анатольевна</p>
              <p className="text-sm text-muted-foreground">Воспитатель высшей категории</p>
            </div>
            <div className="text-center md:text-right text-sm text-muted-foreground">
              <p>© 2024 Персональный сайт педагога ДОУ</p>
              <p className="mt-1">Все материалы защищены авторским правом</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;