import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/ProductCard";
import BenefitCard from "@/components/BenefitCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQItem from "@/components/FAQItem";
import { 
  Dumbbell, 
  Zap, 
  Award, 
  Shield, 
  TrendingUp, 
  Heart,
  CheckCircle2,
  Phone,
  Mail,
  Instagram,
  Facebook
} from "lucide-react";
import heroImage from "@/assets/hero-supplements.jpg";
import wheyImage from "@/assets/product-whey.jpg";
import creatineImage from "@/assets/product-creatine.jpg";
import preworkoutImage from "@/assets/product-preworkout.jpg";
import bcaaImage from "@/assets/product-bcaa.jpg";
import glutamineImage from "@/assets/product-glutamine.jpg";
import multivitaminImage from "@/assets/product-multivitamin.jpg";
import omegaImage from "@/assets/product-omega.jpg";
import thermogenicImage from "@/assets/product-thermogenic.jpg";

const Index = () => {
  const products = [
    {
      name: "Whey Protein Premium",
      description: "Proteína de alto valor biológico para máximo ganho muscular",
      image: wheyImage,
      category: "PROTEÍNA"
    },
    {
      name: "Creatina Pura",
      description: "Aumenta força e performance em treinos intensos",
      image: creatineImage,
      category: "ENERGIA"
    },
    {
      name: "Pre-Workout Extreme",
      description: "Energia explosiva e foco máximo para seus treinos",
      image: preworkoutImage,
      category: "PRÉ-TREINO"
    },
    {
      name: "BCAA Advanced",
      description: "Recuperação muscular acelerada e anti-catabolismo",
      image: bcaaImage,
      category: "RECUPERAÇÃO"
    },
    {
      name: "Glutamina Pure",
      description: "Recuperação intestinal e fortalecimento do sistema imunológico",
      image: glutamineImage,
      category: "RECUPERAÇÃO"
    },
    {
      name: "Multivitamínico Completo",
      description: "Todos os nutrientes essenciais em uma cápsula",
      image: multivitaminImage,
      category: "SAÚDE"
    },
    {
      name: "Ômega 3 Premium",
      description: "Saúde cardiovascular e redução de inflamações",
      image: omegaImage,
      category: "SAÚDE"
    },
    {
      name: "Termogênico Power",
      description: "Acelera metabolismo e queima de gordura",
      image: thermogenicImage,
      category: "EMAGRECIMENTO"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Produtos certificados e testados em laboratório"
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Ingredientes naturais e aprovados pela ANVISA"
    },
    {
      icon: Zap,
      title: "Resultados Rápidos",
      description: "Veja mudanças em apenas 30 dias"
    },
    {
      icon: Heart,
      title: "Saúde em Primeiro",
      description: "Fórmulas que respeitam seu corpo"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Atleta Profissional",
      content: "Mudou completamente meus resultados! Em 2 meses ganhei 5kg de massa magra.",
      rating: 5
    },
    {
      name: "Ana Rodrigues",
      role: "Personal Trainer",
      content: "Recomendo para todos meus alunos. Qualidade incomparável!",
      rating: 5
    },
    {
      name: "Roberto Mendes",
      role: "Entusiasta Fitness",
      content: "O melhor custo-benefício do mercado. Resultados reais!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Como devo tomar os suplementos?",
      answer: "Cada produto possui instruções específicas na embalagem. Recomendamos seguir as orientações ou consultar um nutricionista para um plano personalizado.",
      value: "item-1"
    },
    {
      question: "Os produtos são certificados?",
      answer: "Sim! Todos nossos produtos são certificados pela ANVISA e testados em laboratórios independentes para garantir máxima qualidade e segurança.",
      value: "item-2"
    },
    {
      question: "Quanto tempo para ver resultados?",
      answer: "Os resultados variam de pessoa para pessoa, mas a maioria nota mudanças significativas em 4-6 semanas com uso regular e treino adequado.",
      value: "item-3"
    },
    {
      question: "Há efeitos colaterais?",
      answer: "Nossos produtos são feitos com ingredientes naturais e seguros. Sempre recomendamos consultar um médico antes de iniciar qualquer suplementação.",
      value: "item-4"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Section 1: Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              TRANSFORME SEU<br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CORPO AGORA
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Suplementos premium para resultados extraordinários
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold px-8 py-6 text-lg shadow-lg hover:shadow-primary/50 transition-all"
            >
              QUERO TRANSFORMAR MEU CORPO
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: Value Proposition */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            POR QUE ESCOLHER NOSSOS SUPLEMENTOS?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Qualidade premium, resultados comprovados e o melhor custo-benefício do mercado.
            Milhares de atletas já transformaram seus corpos com nossos produtos.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-5xl font-black text-primary mb-2">+10k</div>
              <div className="text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-secondary mb-2">100%</div>
              <div className="text-muted-foreground">Aprovado ANVISA</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-primary mb-2">5★</div>
              <div className="text-muted-foreground">Avaliação Média</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
            CATEGORIAS DE PRODUTOS
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Dumbbell, name: "PROTEÍNAS", desc: "Ganho muscular" },
              { icon: Zap, name: "PRÉ-TREINO", desc: "Energia explosiva" },
              { icon: TrendingUp, name: "PERFORMANCE", desc: "Máximo desempenho" },
              { icon: Heart, name: "RECUPERAÇÃO", desc: "Regeneração rápida" }
            ].map((category, idx) => (
              <div 
                key={idx}
                className="bg-card border border-border p-8 rounded-lg text-center hover:border-primary transition-all duration-300 group cursor-pointer"
              >
                <category.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Products Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center">
            NOSSOS PRODUTOS
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Seleção premium dos melhores suplementos do mercado
          </p>
          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {products.map((product, idx) => (
                  <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/4">
                    <div className="animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                      <ProductCard {...product} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground hover:bg-primary/90 border-none shadow-lg" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground hover:bg-primary/90 border-none shadow-lg" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
            NOSSOS DIFERENCIAIS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <BenefitCard key={idx} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Results/Transformation */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            RESULTADOS QUE FALAM POR SI
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Compromisso com sua transformação. Veja mudanças reais em semanas!
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { stat: "87%", label: "Mais força em treinos" },
              { stat: "92%", label: "Satisfação dos clientes" },
              { stat: "3x", label: "Resultados mais rápidos" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-5xl font-black mb-2">{item.stat}</div>
                <div className="text-lg">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center">
            O QUE DIZEM NOSSOS CLIENTES
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Histórias reais de transformação
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Quality Guarantee */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-20 h-20 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              GARANTIA DE QUALIDADE
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Todos os nossos produtos passam por rigorosos testes de qualidade e são certificados pela ANVISA. 
              Utilizamos apenas ingredientes premium e processos de fabricação de última geração.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                "Certificação ANVISA",
                "Testes de Laboratório",
                "Ingredientes Premium"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center gap-2 text-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
            PERGUNTAS FREQUENTES
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <FAQItem key={faq.value} {...faq} />
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <section className="py-32 bg-gradient-to-br from-black via-primary/20 to-secondary/20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtOGgydi0yaC0ydjJ6bS0yLTJ2Mmgydi0yaC0yem0tMiAyaDJ2LTJoLTJ2MnptMiAydi0ySDMydjJoMnptMCAyaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            PRONTO PARA A TRANSFORMAÇÃO?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato agora e comece sua jornada rumo ao corpo dos seus sonhos
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 font-bold px-12 py-8 text-xl shadow-2xl hover:scale-105 transition-all"
          >
            FALE COM UM ESPECIALISTA
          </Button>
        </div>
      </section>

      {/* Section 11: Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-black text-2xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SUPLEMENTOS
              </h3>
              <p className="text-muted-foreground">
                Transformando vidas através da suplementação de qualidade premium.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produtos</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Proteínas</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Pré-Treino</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Performance</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Recuperação</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Sobre Nós</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Certificações</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Contato</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <Phone className="w-4 h-4" />
                  <span>(11) 9999-9999</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <Mail className="w-4 h-4" />
                  <span>contato@suplementos.com</span>
                </li>
                <li className="flex gap-4 mt-4">
                  <Instagram className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  <Facebook className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Suplementos Premium. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
