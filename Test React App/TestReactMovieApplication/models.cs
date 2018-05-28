using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TestReactMovieApplication
{
    [Table("Actor")]
    public class Actor
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key, Column(Order = 0)]
        [Required]
        [DisplayName("Id")]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        [DisplayName("Name")]
        public string Name { get; set; }

        [MaxLength(10)]
        [DisplayName("Gender")]
        public string Gender { get; set; }

        [DisplayName("Age")]
        public int? Age { get; set; }

        [MaxLength(255)]
        [DisplayName("Picture")]
        public string Picture { get; set; }
    }

    [Table("Movie")]
    public class Movie
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key, Column(Order = 0)]// check order #
        [Required]
        [DisplayName("Id")]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        [DisplayName("Title")]
        public string Title { get; set; }

        [Required]
        [MaxLength(100)]
        [DisplayName("Director")]
        public string Director { get; set; }

        [Required]
        [DisplayName("DateReleased")]
        public DateTime DateReleased { get; set; }

        [MaxLength(50)]
        [DisplayName("ReleasedBy")]
        public string ReleasedBy { get; set; }

        [MaxLength(10)]
        [DisplayName("Rating")]
        public string Rating { get; set; }

        [MaxLength(50)]
        [DisplayName("Genre")]
        public string Genre { get; set; }

        [DisplayName("GrossRevenue")]
        public decimal? GrossRevenue { get; set; }
    }


    [Table("MovieActor")]
    public class MovieActor
    {
        [Key, Column(Order = 0)]
        [Required]
        [DisplayName("MovieId")]
        public int MovieId { get; set; }

        [Key, Column(Order = 1)]
        [Required]
        [DisplayName("ActorId")]
        public int ActorId { get; set; }
    }
}
